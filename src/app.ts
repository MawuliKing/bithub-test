import cors from "cors";
import express from "express";
import { AppDataSource } from "./core/data-source";
import { errorHandler } from "./core/global-error";
import apiRouter from "./routes/routes";
import { seedDatabase } from "./core/seeding";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api-v1", apiRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Auth service is running on  PORT - ${process.env.PORT}`);
});

AppDataSource.initialize()
  .then(() => {
    console.log(`Database initialized successfully`);
    // seedDatabase()
    //   .then(() => {
    //     console.log("Database seeded");
    //   })
    //   .catch((error) => console.log(error));
  })
  .catch((error) => {
    console.error(`There was an error initializing database: `, error);
  });
