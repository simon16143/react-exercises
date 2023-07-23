import {useState, useEffect} from 'react'
import Alerta from '../components/Alerta'
import axios from 'axios'


const Home = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta,setAlerta] = useState(false)

   const handleSubmit = async(e) => {
     e.preventDefault()
     if([nombre, email, password].includes('')){
         setAlerta({
            msg:"Todos los campos son obligatorios",
            error:true
         })   
         return
     }
     try{
        const {data} = await axios.post("http://localhost:3000/api/usuarios",{nombre,email,password})
        setAlerta({
            msg:"Usuario creado correctamente",
            error:false
        })
        await localStorage.setItem('email', email)
     }
     catch(e){
        setAlerta({
            msg:e.response.data.msg,
            error:true
        })
     }
       
        


   }
   const {msg} = alerta
  return (
    <>
    <h1 className='text-sky-600 font-bold text-4xl text-center mt-6 mb-2'>Create your user</h1>
    <div className='mt-10 flex justify-center'>
        
        <form onSubmit={handleSubmit} className='bg-white shadow  py-10 px-5 md:w-1/2 rounded-lg'>
        {msg && <Alerta alerta={alerta}/>}
            <div className='mb-5'>
                <label htmlFor="nombre" className='uppercase font-bold text-sm text-gray-700'>Nombre</label>
                <input
                 id="nombre"
                 type="text"
                 value={nombre}
                 placeholder='Type your name...'
                 onChange={e=>setNombre(e.target.value)}
                 className='w-full bg-gray-100 mt-2 p-3 rounded-md'
                />
            </div>

            <div className='mb-5'>
                <label className='uppercase font-bold text-sm text-gray-700'>Email</label>
                <input
                type="email"
                value={email}
                placeholder='type youe email'
                onChange={e=>setEmail(e.target.value)}
                className='w-full bg-gray-100 mt-2 p-3 rounded-md'
                />
            </div>

            <div className='mb-5'>
                <label className='uppercase font-bold text-sm text-gray-700'>Password</label>
                <input
                type="password"
                value={password}
                placeholder='type your pass...'
                onChange={e=>setPassword(e.target.value)}
                className='w-full bg-gray-100 mt-2 p-3 rounded-md'
                />
            </div>
            <input
                type="submit"
                value="Crear"
                className='text-white bg-sky-600 w-full p-3 uppercase font-bold text-xl rounded-md hover:cursor-pointer hover:bg-sky-800 transition-colors'
            />
        </form>
    </div>
    </>
  )
}

export default Home