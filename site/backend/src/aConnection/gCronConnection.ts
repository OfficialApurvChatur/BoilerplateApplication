import loggerConnection from "./bLoggerConnection";
import activateServerCronJob from "../bLove/dCronJob/aActivateServerCronJob";


const cronConnection = () => {
  loggerConnection().info({ 
    message: "✅ Great... Cron Connected",
  });

  activateServerCronJob.start();
}

export default cronConnection;
