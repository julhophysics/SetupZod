import "dotenv/config";
import { app } from "./app/App";
import Logger from "./config/logger";

const PORT = process.env.PORT;

const start = (): void => {
  try {
    app.listen(PORT, () => {
      Logger.info(`Server started on port ${PORT}`);
    });
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
};
start();
