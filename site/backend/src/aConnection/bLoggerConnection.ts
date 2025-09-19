import winston from "winston";
import chalk from "chalk";
import environmentConnection from "./aEnvironmentConnection"

// Bring Env
environmentConnection()

// Type
type TService = string
type TModule = string
type TUtility = string
type TMessage = string
type TContext = {
  requestID?: string;
  userID?: string;
  error?: string;
  stack?: string;
  metadata?: Record<string, any>;
  [key: string]: any;
};
type TLevel = 'info' | 'error' | 'warn' | 'debug';

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

// Base Log
export const baseLog = winston.createLogger({
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
  transports: ([
    new winston.transports.Console()
  ])
})

// Centralized Log
const loggerConnection = (args1: { service?: TService, module?: TModule } = {}) => {
  const { 
    service = "--UnknownService--", 
    module = "--UnknownModule--"
  } = args1;

  const setLogLevel = (args2: { level: TLevel, utility?: TUtility, message?: TMessage, context?: TContext }) => {
    const { 
      utility = "--UnknownUtility--", 
      message = "--UnknownMessage--", 
      context = {
        defaultContext: "--UnknownContext--"
      }, 
      level
    } = args2;
    baseLog.log({ level, service, module, utility, message, context: sanitizeContext(context) })
  }

  return {
    debug: (args: { utility?: TUtility, message?: TMessage, context?: TContext }) => setLogLevel({ level: "debug", ...args }),
    info: (args: { utility?: TUtility, message?: TMessage, context?: TContext }) => setLogLevel({ level: "info", ...args }),
    warn: (args: { utility?: TUtility, message?: TMessage, context?: TContext }) => setLogLevel({ level: "warn", ...args }),
    error: (args: { utility?: TUtility, message?: TMessage, context?: TContext }) => setLogLevel({ level: "error", ...args }),
  }
}

// Sanitize Context
const sanitizeContext = (data: Record<string, any>) => {
  const SENSITIVE_KEYS = ['password', 'token', 'apiKey', 'authorization', 'secret'];

  const sanitize = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(sanitize); 
    }

    if (obj && typeof obj === 'object') {
      const result: Record<string, any> = {};
      for (const key in obj) {
        if (SENSITIVE_KEYS.includes(key)) {
          result[key] = '[HIDDEN_FOR_SAFETY]';
        } else {
          result[key] = sanitize(obj[key]);
        }
      }
      return result;
    }

    return obj; // primitive value
  };

  return sanitize(data);
};

export default loggerConnection;
