import http from "http";
import express from "express";
import cookieParserMiddleware from "cookie-parser";
import { Server } from "socket.io";
import loggerConnection from "./bLoggerConnection";
import brandConnection from "./jBrandConnection";
import socketAuthenticationMiddleware from "../bLove/bMiddleware/rSocketAuthenticationMiddleware";


const socketConnection = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, appConnection: express.Express) => {
  try {
    // Socket 
    const io = new Server(server, {
      cors: { 
        origin: [...brandConnection.rFrontendBaseURL], 
        credentials: true 
      }
    })

    // Set Socket in appConnection
    appConnection.set("io", io);

    // Socket Authentication Middleware
    io.use((socket, next) => {
      try {
        cookieParserMiddleware()(
          (socket as any).request, 
          (socket.request as any).res, 
          (error: any) => {
            if (error) {
              loggerConnection().error({ 
                message: "❌ Socket Cookie Parser Error",
                context: { error } 
              });
              return next(error);
            }

            socketAuthenticationMiddleware(socket, next);
          }
        );
      } catch (error: any) {
        loggerConnection().error({ 
          message: "❌ Socket Middleware Error",
          context: { error } 
        });
        next(error);
      }
    });

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
