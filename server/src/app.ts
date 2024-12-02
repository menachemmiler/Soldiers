import express, { Request, request, Response } from "express";
import "dotenv/config";
import formController from "./controllers/form.controller";
import { conectToMongo } from "./config/db";

const PORT = process.env.PORT || 3000;



export const app = express();


conectToMongo();

app.use(express.json());
app.use("/api", formController);

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong").status(200);
});

app.listen(PORT, () => {
  console.log(`Server started, Visit "http://localhost:${PORT}"`);
});
