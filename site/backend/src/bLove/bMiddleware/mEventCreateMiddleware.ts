import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type eventCreateMiddlewareType = {
  Label: string;
  data: any;
  eventList: {
    name: string;
    action: 
      | "emit"        // send event to all clients
      | "broadcast"   // send to all except sender
      | "to-room"     // send to a specific room
      | "disconnect"  // disconnect a client
      | "log"         // only log, no emit
      | "none";       // do nothing
    room?: string;
  }[];
}

const eventCreateMiddleware = ({ Label, data, eventList }: eventCreateMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {
      const io = request.app.get("io");

      if (data && io) {
        for (const each of eventList) {
          switch (each.action) {
            case "emit":
              io.emit(each.name, data);
              break;

            case "broadcast":
              io.sockets.emit(each.name, data);
              break;

            case "to-room":
              if (each.room) io.to(each.room).emit(each.name, data);
              break;

            case "disconnect":
              io.disconnectSockets();
              break;

            case "log":
              loggerConnection().debug({
                message: `🪵 Event Logged: ${each.name}`,
              });
              break;

            case "none":
            default:
              // do nothing
              break;
          }
        }
        
        loggerConnection().debug({
          message: "✅ Event Created Successfully",
        });
      } else {
        loggerConnection().debug({
          message: "⚠️ No data or socket.io instance found — skipping event emission",
        });
      }
    } catch (error) {
      loggerConnection().error({
        message: "❌ Error while emitting socket event",
      });
    }
    
    next();
  }
);

export default eventCreateMiddleware;
