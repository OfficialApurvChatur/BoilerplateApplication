import mongoose from "mongoose";
import loggerConnection from "./bLoggerConnection";


const databaseConnection = () => {
  const DB_URI = process.env.MONGODB_URI as string;
  const DB_NAME = process.env.DB_NAME as string;

  if (!DB_URI || !DB_NAME) {
    loggerConnection().error({ message: "❌ Missing MONGODB_URI or DB_NAME in .env file" });
    process.exit(1);
  }

  mongoose.set({ strictQuery: true });

  mongoose
    .connect(DB_URI, { dbName: DB_NAME })
    .then((response) => {
      loggerConnection().info({ 
        message: "✅ Great... MongoDB Connected",
        context: {
          server: response.connection.host,
          database: response.connection.name
        }
      });
    })
    .catch((error) => {
      loggerConnection().error({ 
        message: "❌ MongoDB connection error", 
        context: { error } 
      });
    });
};

export default databaseConnection;
