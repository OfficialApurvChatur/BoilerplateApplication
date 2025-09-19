import { CronJob } from 'cron'
import loggerConnection from '../../aConnection/bLoggerConnection';


const activateServerCronJob = new CronJob("*/10 * * * * *", () => {
  loggerConnection().info({ 
    message: "✅ Just to keep the server activate",
  });

})

export default activateServerCronJob;
