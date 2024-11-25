import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Conectado ao servidor!");
  socket.emit("join", { user: "Teste" });
});

socket.on("disconnect", () => {
  console.log("Desconectado do servidor.");
});
