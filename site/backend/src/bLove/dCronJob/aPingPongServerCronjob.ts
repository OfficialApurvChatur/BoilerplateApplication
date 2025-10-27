import { CronJob } from 'cron'
import loggerConnection from '../../aConnection/bLoggerConnection';


const pingPongServerCronjob = new CronJob("*/5 * * * *", async () => {
  try {
    const res = await fetch("https://your-domain.com/ping");
    loggerConnection().info({ 
      message: "✅ Just to keep server activate... Pinged server!",
      context: {
        metadata: {
          status: res.status
        }
      }
    });
  } catch (error: any) {
    loggerConnection().error({ 
      message: "❌ Failed to ping server:", 
      context: { error } 
    });
  }
})

export default pingPongServerCronjob;
