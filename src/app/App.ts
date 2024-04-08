import express from "express";
import { router } from "$/routes/Router";
import cors from "cors";
import morganMid from "$/middlewares/morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../docs/swagger.json";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morganMid);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(router);
