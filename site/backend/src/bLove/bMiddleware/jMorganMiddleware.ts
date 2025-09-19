import morgan from "morgan";

import loggerUtility from "../cUtility/dLoggerUtility";
import getLocationFromIPUtility from "../cUtility/eGetLoactionFromIPUtility";


const morganMiddleware = morgan(
  (tokens, req, res) => {
    const ip = req.headers["x-forwarded-for"] || (req as any).ip || req.socket.remoteAddress;
    const location = getLocationFromIPUtility(ip);

    const logObject = {
      ip,
      city: location.city,
      country: location.country,
      method: (tokens as any).method(req, res),
      url: (tokens as any).url(req, res),
      status: (tokens as any).status(req, res),
      responseTime: `${(tokens as any)["response-time"](req, res)} ms`,
    };

    loggerUtility.info(JSON.stringify(logObject));
    return null;
  }
);

export default morganMiddleware;
