import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://luanavsnicacio:131418@cluster0.8bui7mw.mongodb.net/senac2");
//A função guarda a string de conexão dentro dos parênteses

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar  nosso usuário com o mongoDB.

export default db;