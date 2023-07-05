import express, { json } from 'express';
import index from './routes/index.js';
import db from './config/dbConnect.js';
import apis from './routes/api.js'; 

const app = express(); // esta variável recebe o express e será usada em outros arquivos //

app.use(json());
app.use("/", index); // essa barra significa que o index será a "página inicial/padrão", //
app.use("/apis", apis);


db.on("error", console.log.bind(console, 'Error de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

export default app; // usado para exportar a const app//