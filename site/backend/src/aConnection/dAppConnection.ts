import express from "express";

import bodyParserMiddleware from "body-parser";
import cookieParserMiddleware from "cookie-parser";
import corsMiddleware from "cors";
import compressionMiddleware from "compression";
import morganMiddleware from "morgan";

import loggerConnection from "./bLoggerConnection";


loggerConnection().info({ 
  message: "✅ Great... App Connected",
});

const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware());
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.get("/", (_request: express.Request, response: express.Response) => {
  response.send(`Welcome to ${process.env.APPLICATION}`)
})

export default appConnection;
