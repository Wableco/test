import express, { Router, Response, Request } from "express";
import { io } from "socket.io-client";

//conecta com o websocket 
const ws = io("http://localhost:3000/foo");

const app = express();

const router = Router();

router.get("/hc/:id", (req: Request, res: Response) => {
  ws.emit("join", req.params.id, (response: any)=>{
    res.json({message: response })
  } );
});

app.use('/test',router);

export default app;