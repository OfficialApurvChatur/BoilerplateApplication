import http from "http";
import express from "express";
import { Server } from "socket.io";

import cookieParserMiddleware from 'cookie-parser';
import socketAuthenticationMiddleware from "../bLove/bMiddleware/hSocketAuthenticationMiddleware";

import assignUserToSocketUtility from "../bLove/cUtility/dAssignUserToSocketUtility";


const socketConnection = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>, app: express.Express) => {
  try {

    // Socket 
    const io = new Server(server, {
      cors: { 
        origin: (
          process.env.ENVIRONMENT === "Production" ? [ String(process.env.FRONTEND_URL) ] :
          process.env.ENVIRONMENT === "Testing" ?  [ String(process.env.FRONTEND_URL) ] :
          process.env.ENVIRONMENT === "Development" ?  [ "http://localhost:5173", "http://localhost:5174" ] : 
          []
        ), 
        credentials: true 
      }
    })

    // Set Socket in AppConnection
    app.set("io", io);

    // Socket Authentication Middleware
    io.use((socket, next) => {
      try {
        cookieParserMiddleware()(
          (socket as any).request, 
          (socket.request as any).res, 
          (error: any) => {
            if (error) {
              console.error("Cookie parser error:", error);
              return next(error);
            }
            socketAuthenticationMiddleware(socket, next);
          }
        );
      } catch (error: any) {
        console.error("Socket Middleware Error:", error);
        next(error);
      }
    });

    // Listening Event
    io.on("connection", (socket: any) => {
      try {
        const user = socket.user;
        if (!user || !user._id) {
          return socket.disconnect();
        }
        // console.log("User Connected:", socket.id);

        assignUserToSocketUtility.set(user._id.toString(), socket.id);
        console.log("User Added", assignUserToSocketUtility)

        socket.on("disconnect", () => {
          try {
            // console.log("User Disconnected:", socket.id);
            assignUserToSocketUtility.delete(user._id.toString());
            console.log("User Removed", assignUserToSocketUtility)
          } catch (error) {
            console.error("Error during disconnection handling:", error);
          }
        })
      } catch (error) {
        console.error("Error in connection handler:", error);
      }
    })  
  } catch (error) {
    console.error("Critical error in socket setup:", error);
  }
}

export default socketConnection;
