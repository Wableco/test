import app from "./routes";
import { Server, Socket } from "socket.io";
import http from "http";

const serv = http.createServer(app);

const ws = new Server(serv);

ws.of("/foo").on("connection", (ws: Socket) => {
  ws.on("join", (data: any, callback) => {
    callback(data)
  });
});


serv.listen(3000, ()=>{
    console.log('servidor instanciado.')
})