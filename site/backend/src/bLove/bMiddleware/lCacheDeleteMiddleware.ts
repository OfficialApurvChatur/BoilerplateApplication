import loggerConnection from "../../aConnection/bLoggerConnection";
import { redisClient } from "../../aConnection/eRedisConnection";


type cacheDeleteMiddlewareType = {
  keyList: string[],
} 

const cacheDeleteMiddleware = async ({ keyList }: cacheDeleteMiddlewareType) => {
  await redisClient.del(...keyList)
  loggerConnection().debug({ 
    message: "✅ Cache Deleted Successfully",
  });
};

export default cacheDeleteMiddleware;
