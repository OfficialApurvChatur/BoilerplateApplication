import fs from 'fs';
import path from 'path';
import { CronJob } from 'cron';
import { APILogModel } from '../aMCVR/aModel/admin/aSetting/cAPILogModel';
import { redisClient } from '../../aConnection/dRedisConnection';


const logFilePath = path.join(__dirname, "../../../appConnection.log");

const apiLogJob = new CronJob("*/15 * * * *", async () => {
  console.log("Cronjob executing on every 15 minute");

  if (!fs.existsSync(logFilePath)) {
    console.log("Log file not found.");
    return;
  }

  try {
    // Read and split logs
    const logData = fs.readFileSync(logFilePath, "utf8").split("\n").filter(Boolean);

    const logsToInsert = logData
      .map((line: string) => {
        try {
          const logEntry = JSON.parse(line.replace(/^\u001b\[32minfo\u001b\[39m/, "").trim());
          const logMessage = JSON.parse(logEntry.message);

          return {
            aTitle: logMessage.ip,

            dIP: logMessage.ip,
            dCity: logMessage.city,
            dCountry: logMessage.country,
            dMethod: logMessage.method,
            dURL: logMessage.url,
            dStatus: String(parseInt(logMessage.status, 10)),
            dResponseTime: String(parseFloat(logMessage.responseTime)),
            dTimestamp: new Date(logEntry.timestamp).toISOString(),
          };
        } catch (error) {
          console.error("Error parsing log:", error);
          return null;
        }
      })
      .filter(Boolean); // Removes null values

    if (logsToInsert.length > 0) {
      // console.log("Logs to insert:", JSON.stringify(logsToInsert, null, 2));

      await APILogModel.insertMany(logsToInsert);
      console.log(`Inserted ${logsToInsert.length} logs into the database.`);

      await redisClient.del("apilog-list");
      // console.log("Redis cache cleared.");
    }

    // Archive old log file instead of clearing it
    // fs.renameSync(logFilePath, backupLogFilePath);
    fs.writeFileSync(logFilePath, "", "utf8"); // Create a fresh log file
  } catch (error) {
    console.error("Error processing log file:", error);
  }
});

export default apiLogJob;
