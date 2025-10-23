import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import emailConnection from "../../aConnection/hEmailConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type emailToUserMiddlewareType = {
  Label: string;
  data: any;
  textMessage: string
} 

const emailToUserMiddleware = ({ Label, data, textMessage }: emailToUserMiddlewareType) => catchAsyncMiddleware(
  async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {
      const userEmail = (request as any).user?.eEmail;

      if (!userEmail) {
        loggerConnection().debug({
          message: `⚠️ No user email found on request — skipping ${Label} email`,
        });
        return next();
      }

      await emailConnection.sendMail(
        {
          from: "official.apurv.chatur@gmail.com",
          to: userEmail,
          subject: `${Label} Notification`,
          text: textMessage,
        },
        (error, _info) => {
          if (error) {
            loggerConnection().debug({
              message: `❌ ${Label} Email to User Error`,
            });
          } else {
            loggerConnection().debug({
              message: `✅ ${Label} Email Sent to ${userEmail}`,
            });
          }
        }
      );
    } catch (error) {
      loggerConnection().error({
        message: `❌ Error while sending ${Label} email to user`,
      });
    }

    next();
  }
);

export default emailToUserMiddleware;
