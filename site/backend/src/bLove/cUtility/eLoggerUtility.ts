import { createLogger, format, transports } from "winston";


// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const loggerUtility = createLogger({
  level: "info",
  format: format.combine(format.colorize(), format.timestamp(), format.json()),
  transports: [
    new transports.Console({ format: consoleLogFormat }),
    new transports.File({ filename: "appConnection.log" }),
  ],
});

export default loggerUtility;
