import express from 'express';

import { redisClient } from '../../aConnection/eRedisConnection';
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";

type TCheckCacheOptions = {
  key: string;
  label: string;
  name: string;
  customMessage?: string;
};

const checkCacheMiddleware = ({ key, label, name, customMessage }: TCheckCacheOptions) => (
  catchAsyncMiddleware(
    // Returning Function
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Check Cache
      const cacheKey = 
        (key === `${label}Model-retrieve`) ? (`${label}Model-retrieve:${request.params.id}`) : 
        (`${key}Model`);

      const oldCache = await redisClient.get(cacheKey);

      if (oldCache) {
        console.log("Congratulations... We got cache");

        // Response
        response.status(200).json({
          success: true,
          message: customMessage || `${label} ${name}ed Successfully... From Backend Cache`,
          [name.toLowerCase()]: JSON.parse(oldCache),
        });

        return;
      } else {
        console.log("Oops... No cache found");

        // Move Next
        return next();
      } 
    }
  )
);

export default checkCacheMiddleware;
