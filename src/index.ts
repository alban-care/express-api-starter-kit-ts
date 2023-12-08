import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = process.env.APP_PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || `http://localhost:${port}`,
    credentials: true,
  })
);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(port, () => {
  console.log(`> Server running on http://localhost:${port}`);
  console.log(`> API running on http://localhost:${port}/api/v1`);
});
