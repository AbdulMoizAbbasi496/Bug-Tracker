import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import router from "./src/routes/index.js";
import db from "./src/models/index.js";
import errorMiddleware from "./src/middlewares/error.middleware.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

db.sequelize
    .authenticate()
    .then(() => {
        console.log("Database Connected");

        return db.sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });