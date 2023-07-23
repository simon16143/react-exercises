import mongoose from 'mongoose'


const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        trim:true,
        require:true
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    },


}, {timestamps:true})

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario