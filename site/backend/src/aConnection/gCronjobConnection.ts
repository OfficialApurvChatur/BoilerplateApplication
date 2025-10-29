import loggerConnection from "./bLoggerConnection";

// import pingPongServerCronjob from "../bLove/dCronjob/aPingPongServerCronjob";
// import apiLogUploadCronjob from "../bLove/dCronjob/bAPILogUploadCronjob";


const cronjobConnection = () => {
  loggerConnection().info({ 
    message: "✅ Great... Cronjob Connected",
  });

  // pingPongServerCronjob.start();
  // apiLogUploadCronjob.start();
}

export default cronjobConnection;
