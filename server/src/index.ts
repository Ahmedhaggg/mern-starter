import express from "express";
import http  from "http";
import { Server } from "socket.io"
const app = express();
const server = http.createServer(app)

const io = new Server(server); 

// socket
io.on('connection', (socket) => {
    
});

// passport configuration
import "./config/passport";

// database configuration
import "./config/database";

// modules 
import  appModules  from "./modules/index.module";
app.use("/api/v1/user/auth", appModules.userAuthModule)


export default app;