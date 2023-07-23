import express from 'express'
import usuariosRoutes from './routes/usuariosRoutes.js'
import conectarDB from './config/db.js'
import cors from 'cors'


const app = express()
const PORT = 3000
app.use(express.json())
const whiteList = "http://localhost:5173"
const corsOptions= {
    origin : function(origin,callback){
        if(whiteList.includes(origin) !== -1){
            //permite consultar la API
            callback(null,true)
        }else{
            //No permite consultar la API
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors(corsOptions))
conectarDB()
app.use('/api/usuarios', usuariosRoutes)

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
}
)