import app from "./routes";  // Importa o app do arquivo routes.ts
import { Server, Socket } from "socket.io";  // Importa classes do Socket.IO
import http from "http";  // Importa o módulo http para criar o servidor

// Cria o servidor HTTP utilizando o Express
const serv = http.createServer(app);

// Cria a instância do Socket.IO associada ao servidor HTTP
const ws = new Server(serv);

// Configura o namespace '/foo' para aceitar conexões WebSocket
ws.of("/foo").on("connection", (socket: Socket) => {
  console.log('Usuário conectado a /foo');

  // Configura o evento 'join' para responder com os dados recebidos
  socket.on("join", (data: any, callback) => {
    console.log("Recebido no join:", data);
    callback(data);  // Responde com o mesmo dado recebido
  });

  // Detecta quando o usuário se desconecta
  socket.on("disconnect", () => {
    console.log('Usuário desconectado');
  });
});

// Inicia o servidor HTTP na porta 3000
serv.listen(5000, () => {
  console.log('Servidor WebSocket e Express instanciado na porta 3000.');
});
