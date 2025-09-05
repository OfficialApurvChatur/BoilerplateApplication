import loggerConnection from "./bLoggerConnection";


const cronConnection = () => {
  loggerConnection().info({ 
    message: "✅ Great... Cron Connected",
  });
}

export default cronConnection;
