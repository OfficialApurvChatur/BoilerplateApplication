import http from 'http';

import environmentConnection from './aConnection/aEnvironmentConnection';
import loggerConnection from './aConnection/bLoggerConnection';
import databaseConnection from './aConnection/cDatabaseConnection';
import appConnection from './aConnection/dAppConnection';
import redisConnection from './aConnection/eRedisConnection';
import cronConnection from './aConnection/gCronConnection';


// Uncaught Exception
process.on("uncaughtException", (error: Error) => {
  loggerConnection().info({ 
    message: "❌ Error -->",
    context: {
      error: error.message,
    }
  });

  loggerConnection().info({ 
    message: "❌ Shutting down the server due to Uncaught Exception",
  });

  process.exit(1)
})

// Conect Environment
environmentConnection();

// Connect Database
databaseConnection();

// Connect Redis
redisConnection();

// Connect App
appConnection.listen(process.env.PORT, () => {
  // Connect Cron
  cronConnection();

  loggerConnection().info({ 
    message: "✅ Great... Server Connected",
    context: {
      url: `${process.env.BACKEND_URL}:${process.env.PORT}`,
      workerService: `${process.pid}`
    }
  });

});

// Unhandled Promise Rejection
process.on("unhandledRejection", (error: Error) => {
  loggerConnection().info({ 
    message: "❌ Error -->",
    context: {
      error: error.message,
    }
  });

  loggerConnection().info({ 
    message: "❌ Shutting down the server due to Unhandled Promise Rejection",
  });

  process.exit(1)
})
