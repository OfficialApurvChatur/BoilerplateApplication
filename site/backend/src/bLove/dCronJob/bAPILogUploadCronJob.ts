import fs from "fs";
import path from "path";
import { CronJob } from "cron";

import { redisClient } from "../../aConnection/eRedisConnection";
import loggerConnection from "../../aConnection/bLoggerConnection";

import { APILogModel } from "../aMCVR/aModel/aDatabaseManagement/aSetting/bAPILogModel";


type LogMessageType = {
  ip: string;
  city: string;
  country: string;
  method: string;
  url: string;
  status: string | number;
  responseTime: string | number;
}

type ProcessedLogType = {
  aTitle: string;
  dIP: string;
  dCity: string;
  dCountry: string;
  dMethod: string;
  dURL: string;
  dStatus: string;
  dResponseTime: string;
  dTimestamp: string;
}

const logFilePath = path.join(__dirname, "./appConnection.log");

function safeJsonParse<T>(input: string): T | null {
  try {
    return JSON.parse(input);
  } catch {
    return null;
  }
}

const apiLogUploadCronjob = new CronJob("*/15 * * * *", async () => {
  loggerConnection().info({ 
    message: "✅ API Log Cron: Executing every 15 minutes" 
  });

  try {
    // Ensure log file exists
    if (!fs.existsSync(logFilePath)) {
      loggerConnection().error({ 
        message: "❌ API Log Cron: Log file not found." 
      });
      return;
    }

    const rawData = await fs.promises.readFile(logFilePath, "utf8");
    const lines = rawData.split("\n").filter(Boolean);

    const logsToInsert: ProcessedLogType[] = [];

    for (const line of lines) {
      try {
        // Remove ANSI color codes (e.g., "\u001b[32minfo\u001b[39m")
        const cleanLine = line.replace(/^\u001b\[\d+m\w+\u001b\[\d+m/, "").trim();
        const parsedLog = safeJsonParse<{ message: string; timestamp: string }>(cleanLine);

        if (!parsedLog) continue;

        const messageData = safeJsonParse<LogMessageType>(parsedLog.message);
        if (!messageData) continue;

        logsToInsert.push({
          aTitle: messageData.ip,
          dIP: messageData.ip,
          dCity: messageData.city,
          dCountry: messageData.country,
          dMethod: messageData.method,
          dURL: messageData.url,
          dStatus: String(parseInt(messageData.status.toString(), 10)),
          dResponseTime: String(parseFloat(messageData.responseTime.toString())),
          dTimestamp: new Date(parsedLog.timestamp).toISOString(),
        });
      } catch (error: any) {
        loggerConnection().error({ 
          message: "❌ API Log Cron: Error parsing log line",
          context: { error }
        });
      }
    }

    if (logsToInsert.length === 0) {
      loggerConnection().info({ 
        message: "❌ API Log Cron: No valid logs to insert." 
      });
      return;
    }

    await APILogModel.insertMany(logsToInsert);
    loggerConnection().info({ 
      message: `✅ API Log Cron: Inserted ${logsToInsert.length} logs into MongoDB.` 
    });

    // Clear Redis cache for updated logs
    await redisClient.del("APILogModel::list");
    loggerConnection().info({ 
      message: "✅ API Log Cron: Redis cache cleared for 'APILogModel::list'." 
    });

    // Clear the original log file (archive if needed)
    await fs.promises.writeFile(logFilePath, "", "utf8");
    loggerConnection().info({ 
      message: "✅ API Log Cron: Log file cleared successfully." 
    });

  } catch (error: any) {
    loggerConnection().error({ 
      message: "❌ API Log Cron: Error processing log file",
      context: { error }
    });
  }
});

export default apiLogUploadCronjob;
