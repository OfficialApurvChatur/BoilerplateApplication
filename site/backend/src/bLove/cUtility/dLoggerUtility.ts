import winston from "winston";
import chalk from "chalk";


// Environment
const isLocal = process.env.ENVIRONMENT === "Local";
const isDevelopment = process.env.ENVIRONMENT === "Development";
const isStaging = process.env.ENVIRONMENT === "Stage";
const isProduction = process.env.ENVIRONMENT === "Production";

// Format
const localFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ level, message, timestamp, service, module, utility, context }) => {
    const levelColor = {
      info: chalk.blue,
      warn: chalk.yellow,
      error: chalk.red,
      debug: chalk.green
    }[level] || chalk.white;

    return `${chalk.gray(`[${timestamp}]`)} ${levelColor(`[${level.toUpperCase()}]`)} ${chalk.yellow(
      `[${service}]`
    )} ${chalk.magenta(`[${module}]`)} ${chalk.cyan(`[${utility}]`)} - ${
      message
    }\n${context ? chalk.dim(JSON.stringify(context, null, 2)) : ''}`;
  })
);
const developmentFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ level, message, timestamp, service, module, utility, context }) => {
    const levelColor = {
      info: chalk.blue,
      warn: chalk.yellow,
      error: chalk.red,
      debug: chalk.green
    }[level] || chalk.white;

    return `${chalk.gray(`[${timestamp}]`)} ${levelColor(`[${level.toUpperCase()}]`)} ${chalk.yellow(
      `[${service}]`
    )} ${chalk.magenta(`[${module}]`)} ${chalk.cyan(`[${utility}]`)} - ${
      message
    }\n${context ? chalk.dim(JSON.stringify(context, null, 2)) : ''}`;
  })
);
const stagingFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ level, message, timestamp, service, module, utility, context }) => {
    const levelColor = {
      info: chalk.blue,
      warn: chalk.yellow,
      error: chalk.red,
      debug: chalk.green
    }[level] || chalk.white;

    return `${chalk.gray(`[${timestamp}]`)} ${levelColor(`[${level.toUpperCase()}]`)} ${chalk.yellow(
      `[${service}]`
    )} ${chalk.magenta(`[${module}]`)} ${chalk.cyan(`[${utility}]`)} - ${
      message
    }\n${context ? chalk.dim(JSON.stringify(context, null, 2)) : ''}`;
  })
);
const productionFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(({ level, service, module, utility, message, context, timestamp }) => {
    const levelColor = {
      info: chalk.blue,
      warn: chalk.yellow,
      error: chalk.red,
      debug: chalk.green,
    }[level] || chalk.white;

    const coloredContext = context
      ? chalk.gray(JSON.stringify(context, null, 2))
      : chalk.gray('{}');

    return [
      chalk.dim('{'),
      `  ${chalk.white('timestamp')}: '${chalk.dim(timestamp)}',`,
      `  ${chalk.white('level')}: '${levelColor(level)}',`,
      `  ${chalk.white('service')}: '${chalk.yellow(service)}',`,
      `  ${chalk.white('module')}: '${chalk.magenta(module)}',`,
      `  ${chalk.white('utility')}: '${chalk.cyan(utility)}',`,
      `  ${chalk.white('message')}: '${chalk.white(message)}',`,
      `  ${chalk.white('context')}: ${coloredContext}`,
      chalk.dim('}')
    ].join('\n');
  })
);
const consoleLogFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const loggerUtility = winston.createLogger({
  level: (
    isLocal ? "debug" :
    isDevelopment ? "debug" :
    isStaging ? "debug" :
    isProduction ? "info" :
    "info"
  ),
  format: (
    isLocal ? localFormat :
    isDevelopment ? developmentFormat :
    isStaging ? stagingFormat :
    isProduction ? productionFormat :
    productionFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ 
      filename: "./src/bLove/dCronJob/appConnection.log",
      format: winston.format.combine(
        winston.format.timestamp(), 
        winston.format.json()
      ) 
    }),
  ],
});

export default loggerUtility;
