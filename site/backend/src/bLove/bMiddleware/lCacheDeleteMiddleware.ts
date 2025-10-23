import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import { redisClient } from "../../aConnection/eRedisConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type cacheDeleteMiddlewareType = {
  keyList: string[],
} 

const cacheDeleteMiddleware = ({ keyList }: cacheDeleteMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    await redisClient.del(...keyList)
    loggerConnection().debug({ 
      message: "âŒ Cache Deleted Successfully",
    });

    next();
  }
);

export default cacheDeleteMiddleware;
