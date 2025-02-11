import morgan from "morgan";

import loggerUtility from "../cUtility/eLoggerUtility";
import getLocationFromIPUtility from "../cUtility/fGetLoactionFromIPUtility";


const morganMiddleware = morgan(
  (tokens, req, res) => {
    const ip = req.headers["x-forwarded-for"] || (req as any).ip || req.socket.remoteAddress;
    const location = getLocationFromIPUtility(ip);

    const logObject = {
      ip,
      city: location.city,
      country: location.country,
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: tokens.status(req, res),
      responseTime: `${tokens["response-time"](req, res)} ms`,
    };

    loggerUtility.info(JSON.stringify(logObject));
    return null;
  }
);

export default morganMiddleware;
