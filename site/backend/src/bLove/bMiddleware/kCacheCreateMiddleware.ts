import loggerConnection from "../../aConnection/bLoggerConnection";
import { redisClient } from "../../aConnection/eRedisConnection";


type cacheCreateMiddlewareType = {
  key: string,
  data: any
} 

const cacheCreateMiddleware = async ({ key, data }: cacheCreateMiddlewareType) => {
  await redisClient.setex(key, 15*60, JSON.stringify(data));
  loggerConnection().debug({ 
    message: "✅ Cache Created Successfully",
  });
};

export default cacheCreateMiddleware;
