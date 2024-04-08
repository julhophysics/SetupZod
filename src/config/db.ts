import config from "config";
import mongoose from "mongoose";
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("DBURI");
  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectado!");
  } catch (err) {
    Logger.error(err);
    process.exit(1);
  }
}

export default connect;
