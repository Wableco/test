import app from "./routes";
import { Server, Socket } from "socket.io";
import http from "http";

const serv = http.createServer(app);

const ws = new Server(serv);

ws.of("/foo").on("connection", (ws: Socket) => {
  ws.on("join", (data: any) => {
    if (data) console.log(data);
    else console.log("não tem nenhum dado, mas oi!!");
    ws.emit('join','olá123')
  });
});


serv.listen(3000, ()=>{
    console.log('servidor instanciado.')
})