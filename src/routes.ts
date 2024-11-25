import express, { Router, Response, Request } from "express";
import { io } from "socket.io-client";

//conecta com o websocket 
const ws = io("http://localhost:3000/foo");

const app = express();

const router = Router();

router.get("/hc", (req: Request, res: Response) => {
  ws.emit("join", 'oi123' );
  ws.on('join', (data: any)=>{
    res.json({message: 123, obj: data, status: 200})
  })
});

app.use(router);

export default app;