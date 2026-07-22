const bullMQConnection = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: String(process.env.REDIS_PASSWORD),
  maxRetriesPerRequest: null
}

export default bullMQConnection;
