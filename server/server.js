import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
// const router = require("./routes/index");
import router from "./routes/index.js";

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server URL : http://localhost:${PORT}`);
})