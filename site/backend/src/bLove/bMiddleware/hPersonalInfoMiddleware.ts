import express from 'express';

import catchAsyncMiddleware from './bCatchAsyncMiddleware';

type TPersonalInfoMiddlewareArgs = {
  type?: "created" | "updated";
};

const personalInfoMiddleware = ({ type = "created" }: TPersonalInfoMiddlewareArgs) =>
  catchAsyncMiddleware(
    (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Personal Info
      if (type === "created") {
        request.body.bCreatedAt = new Date(Date.now());
        request.body.bCreatedBy = (request as any).user;
      } else if (type === "updated") {
        request.body.bUpdatedAt = new Date(Date.now());
        request.body.bUpdatedBy = (request as any).user;
      }

      return next();
    }
  );

export default personalInfoMiddleware;
