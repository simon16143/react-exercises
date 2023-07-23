import Usuario from "../models/usuarioModels.js"

//Create del usuario
const crearUsuario = async(req,res) => {
   const {email} = req.body
   const validarUsuario = await Usuario.findOne({email:email})
   if(validarUsuario){
        const error = new Error('Usuario ya existe')
        return res.status(400).json({msg: error.message})
        
   }
   try{
    const usuario = new Usuario(req.body)
    const usuarioAlmacenado = await usuario.save()
    res.json(usuarioAlmacenado)
   }
   catch(e){
    console.log(e)
   }
  
}

//Read del usuario
const consultarusuario =  async(req,res)=>{
    const {email} = req.body
    const validarEmail = await Usuario.findOne({email:email})
    if(!validarEmail){
        const error = new Error('Usuario no encontrado')
        return res.status(400).json({msg: error.message})
    }else{
        res.json(validarEmail)
    }
     
    }



//Update del usuario
const editarUsuario = async(req,res) => {
    const {email} = req.body
    const usuario = await Usuario.findOne({email:email})
    if(!usuario){
        const error = new Error('Usuario no encontrado')
        return res.status(400).json({msg: error.message})
    }
         usuario.nombre = req.body.nombre || usuario.nombre
         usuario.password = req.body.password || usuario.password 
    try{
        const usuarioActualizado = await usuario.save()
        return res.json(usuarioActualizado)
    }
    catch(e){
        console.log(e)
    }

}
//Delete del usuario
const borrarUsuario = async(req,res) => {
    const {email} = req.params
    const usuario = await Usuario.findOne({email:email})
    if(!usuario){
        const error = new Error('Usuario no encontrado')
        return res.status(400).json({msg: error.message})
    }
    try{
        await usuario.deleteOne()
        return res.json({msg: "Usuario borrado correctamente"})
    }
    catch(e){
        console.log(e)
    }
}
export {
    crearUsuario,
    consultarusuario,
    editarUsuario,
    borrarUsuario 
}