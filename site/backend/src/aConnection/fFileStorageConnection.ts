import cloudinary from "cloudinary";
import loggerConnection from "./bLoggerConnection";


const fileStorageConnection = () => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
  })

  loggerConnection().info({
    message: "✅ Great... Cloudinary Connected", 
    context: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME
    }
  })
}

export default fileStorageConnection;
