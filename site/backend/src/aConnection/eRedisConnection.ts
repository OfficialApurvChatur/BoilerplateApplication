import Redis from "ioredis";
import loggerConnection from "./bLoggerConnection";


const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: String(process.env.REDIS_PASSWORD)
})

const redisConnection = (client: Redis = redisClient) => {
  client.on("error", (error) => {
    loggerConnection().error({ 
      message: "❌ Redis Client Error",
      context: {
        error: error.message
      }
    })
  })

  client.on("connect", () => {
    loggerConnection().info({ 
      message: "✅ Great... RedisDB Connected", 
      context: {
        server: client.options.host
      }
    })
  })
}

export default redisConnection;
export { redisClient };
