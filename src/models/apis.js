import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        jogo: { type: String, required: true},
        tema: { type: String, required: true},
        quantidade: {type: String, required: true},
        
    }
)


const apis = mongoose.model('apis', apiSchema);


export default apis; 

