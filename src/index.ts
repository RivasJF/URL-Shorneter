import express from "express";
import { PORT } from "./config.js";
import routes from "./Routes/index.routes.js";

const server = express()
server.use(routes)

server.listen(PORT,()=>{
    console.log(`Server in Port: ${PORT}`)
})