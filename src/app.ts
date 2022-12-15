import express from "express";
import encryptionHandler from "./routes/main";

const app = express();

app.use(encryptionHandler);

export default app;