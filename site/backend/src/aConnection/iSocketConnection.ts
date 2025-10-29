import http from "http";
import express from "express";
import { Server } from "socket.io";
import loggerConnection from "./bLoggerConnection";
import brandConnection from "./jBrandConnection";


const socketConnection = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, appConnection: express.Express) => {
  try {
    // Socket 
    const io = new Server(server, {
      cors: { 
        origin: brandConnection.rFrontendBaseURL, 
        credentials: true 
      }
    })

    // Set Socket in appConnectionConnection
    appConnection.set("io", io);

    // Listening Event
    io.on("connection", (socket: any) => {
      try {
        loggerConnection().debug({ 
          message: "✅ Great... Socket Connected",
          context: {
            socket: socket.id,
          }
        });

        socket.on("disconnect", () => {
          try {
            loggerConnection().debug({ 
              message: "✅ Great... Socket Disconnected",
              context: {
                socket: socket.id,
              }
            });
          } catch (error: any) {
            loggerConnection().error({ 
              message: "❌ Socket Disconnection Error",
              context: { error } 
            });
          }
        })

      } catch (error: any) {
        loggerConnection().error({ 
          message: "❌ Socket Connection Error",
          context: { error } 
        });
      }
    })  
  } catch (error: any) {
    loggerConnection().error({ 
      message: "❌ Socket Critical Error",
      context: { error } 
    });
  }
}

export default socketConnection;
