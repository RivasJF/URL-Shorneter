import express from "express";
import { PORT } from "./config/config.js";
import routes from "./Routes/index.routes.js";
import { errorHandler } from "./middleware/error.js";

const server = express()

server.use(express.json())

server.use(routes)

server.use(errorHandler)

server.listen(PORT,()=>{
    console.log(`Server in Port: ${PORT}`)
})