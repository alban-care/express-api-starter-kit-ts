import express from "express";
import api from "./api";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  if (req.url.startsWith("/api/v1")) {
    return next();
  }

  res.redirect(301, "/api/v1" + req.url);
});

app.use("/api/v1", api);

export default app;
