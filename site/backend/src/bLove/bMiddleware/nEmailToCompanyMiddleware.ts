import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import emailConnection from "../../aConnection/hEmailConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type emailToCompanyMiddlewareType = {
  Label: string;
  data: any;
  textMessage: string
} 

const emailToCompanyMiddleware = ({ Label, data, textMessage }: emailToCompanyMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {
      if (!data) return next();

      await emailConnection.sendMail(
        {
          from: "official.apurv.chatur@gmail.com",
          to: "official.apurv.chatur@gmail.com",
          subject: `${Label} Modified Successfully`,
          text: textMessage,
        },
        (error, _info) => {
          if (error) {
            loggerConnection().debug({
              message: `❌ ${Label} Email Error`,
            });
          } else {
            loggerConnection().debug({
              message: `✅ ${Label} Email Sent`,
            });
          }
        }
      );
    } catch (error) {
      loggerConnection().error({
        message: `❌ Error while sending ${Label} email`,
      });
    }

    next();
  }
);

export default emailToCompanyMiddleware;
