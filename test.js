"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const socket = (0, socket_io_client_1.io)("http://localhost:3000");
socket.on("connect", () => {
    console.log("Conectado ao servidor!");
    socket.emit("join", { user: "Teste" });
});
socket.on("disconnect", () => {
    console.log("Desconectado do servidor.");
});
