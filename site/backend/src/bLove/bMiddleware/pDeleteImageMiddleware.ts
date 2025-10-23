import express from "express";
import cloudinary from "cloudinary";
import loggerConnection from "../../aConnection/bLoggerConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type deleteImageMiddlewareType = {
  Label: string,
  data: any
}

const deleteImageMiddleware = ({ Label, data }: deleteImageMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    if (data?.aImage) {
      try {
        const publicId = data.aImage.split("/").pop().split(".")[0];
        await cloudinary.v2.uploader.destroy(`${Label}/${publicId}`);
        loggerConnection().debug({
          message: "✅ Image deleted successfully from Cloudinary",
        });
      } catch (error) {
        loggerConnection().error({
          message: "❌ Failed to delete image from Cloudinary",
        });
      }
    } else {
      console.log("ℹ️ No image found to delete");
    }

    next();
  }
);

export default deleteImageMiddleware;
