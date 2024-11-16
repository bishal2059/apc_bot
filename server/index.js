import http from 'http';
import express from 'express';

const PORT = 8080;

const app = express();

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server listening to port http://localhost:${8080}`)
})