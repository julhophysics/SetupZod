import morgan, { StreamOptions } from "morgan";
import Logger from "../config/logger";

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const morganMid = morgan(":method :url :status :res[content-length] - :response-time ms", {
  stream,
});

export default morganMid;
