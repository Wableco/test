"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const serv = http_1.default.createServer(routes_1.default);
const ws = new socket_io_1.Server(serv);
ws.of("/foo").on("connection", (ws) => {
    ws.on("join", (data) => {
        if (data)
            console.log(data);
        else
            console.log("não tem nenhum dado, mas oi!!");
        ws.emit('join', 'olá123');
    });
});
serv.listen(3000, () => {
    console.log('servidor instanciado.');
});
