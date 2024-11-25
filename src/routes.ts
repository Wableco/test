import express, { Router, Response, Request, response } from "express";
import { io } from "socket.io-client";  // Cliente do Socket.IO para conectar ao servidor WebSocket

// Conectando-se ao servidor WebSocket na rota '/foo'
const ws = io("http://localhost:3000/foo");

const app = express();
const router = Router();

// Rota Express que dispara um evento WebSocket
router.get("/hc/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  // Emitindo o evento 'join' para o servidor WebSocket com o ID
  ws.emit("join", id, (response: any) => {
    // Responde ao cliente HTTP com a resposta recebida do WebSocket
    res.json({ message: `Resposta do WebSocket: ${response}` });
  });
});

router.get("/", (req: Request, res: Response)=>{
    res.json({message: "ok"})
})

// Usando o router no servidor Express
app.use('/test', router);

// Iniciando o servidor Express na porta 4000
app.listen(4000, () => {
  console.log("Servidor Express rodando na porta 4000.");
});

export default app