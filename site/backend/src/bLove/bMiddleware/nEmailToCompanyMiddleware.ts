import express from "express";
import loggerConnection from "../../aConnection/bLoggerConnection";
import emailConnection from "../../aConnection/hEmailConnection";
import catchAsyncMiddleware from "./bCatchAsyncMiddleware";


type emailToCompanyMiddlewareType = {
  Label: string;
  data: any;
  textMessage: string
} 

const emailToCompanyMiddleware = async ({ Label, data, textMessage }: emailToCompanyMiddlewareType) => {
  try {
    if (!data) {
      loggerConnection().debug({
        message: `⚠️ No data provided`,
      });
      return
    };

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
};

export default emailToCompanyMiddleware;
