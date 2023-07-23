import express from 'express'
import { crearUsuario, consultarusuario, editarUsuario, borrarUsuario  } from '../controllers/usuarioControllers.js'

const router = express.Router()

router.post('/', crearUsuario)
router.post('/consultar-usuario', consultarusuario)
router.put('/actualizar-usuario', editarUsuario)
router.delete('/borrar-usuario/:email', borrarUsuario )


export default router