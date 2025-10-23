import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import { redisClient } from "../../aConnection/eRedisConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type cacheCreateMiddlewareType = {
  key: string,
  data: any
} 

const cacheCreateMiddleware = ({ key, data }: cacheCreateMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    await redisClient.setex(key, 15*60, JSON.stringify(data));
    loggerConnection().debug({ 
      message: "âœ… Cache Created Successfully",
    });

    next();
  }
);

export default cacheCreateMiddleware;
