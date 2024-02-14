import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(4000, () => console.log(`Server is running on port ${PORT}`));

export default app;
