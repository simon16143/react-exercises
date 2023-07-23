import axios from 'axios'
import {useState, useEffect} from 'react'
import Alerta from '../components/Alerta'

const EdicionUsuario = () => {
   const [card, setCard] = useState(false)
   const [nombre, setNombre] = useState('')
   const [password, setPassword] = useState('')
   const [alerta, setAlerta] = useState(false)
   const [email, setEmail] = useState('')


   useEffect(()=>{
    const email = localStorage.getItem('email')
    setEmail (email)
    const getInfo = async()=>{
        try{
            const {data} = await axios.put('http://localhost:3000/api/usuarios/actualizar-usuario',{email})
            if (data){
                await setCard(true)
                
            }
            
           
        }
        catch(e){
            console.log(e)
        }
    }
    getInfo()
    
    
   },[])
   const handleSubmit = async (e) => {
        e.preventDefault()
        if([nombre,password].includes('')){
            setAlerta(
                {
                msg:"Los campos son obligatorios",
                error:true
                }
            )
            return
        }
        try{
            const {data} = await axios.put('http://localhost:3000/api/usuarios/actualizar-usuario',{email, nombre,password})
            setAlerta({
                msg:"Usuario actualizado",
                error:false

            })
        }
        catch(e){
            setAlerta({
                msg: e.response.data.msg,
                error:true
            })
        }
   }
   const {msg} = alerta
  return (
    <>
    <h1 className='font-bold uppercase text-center text-sky-600 text-4xl mt-5'>Update your user</h1>
      {card && (
        <>
         <div className=' mt-10  flex justify-center'>
            <form onSubmit={handleSubmit} className='bg-white border shadow-xl  py-10 px-5 md:w-1/2 rounded-lg'>
                {msg && <Alerta alerta={alerta}/>}
            <div className='mb-5'>
                <label htmlFor="nombre" className='uppercase font-bold text-sm text-gray-700'>Nombre</label>
                <input
                 id="nombre"
                 type="text"
                 value={nombre}
                 onChange={e=>setNombre(e.target.value)}
                 placeholder='update your name...'
                 className='w-full bg-gray-100 mt-2 p-3 rounded-md'
                />
            </div>

            <div className='mb-5'>
                <label htmlFor="password" className='uppercase font-bold text-sm text-gray-700'>Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder='update your pass'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    className='w-full bg-gray-100 mt-2 p-3 rounded-md'
                />
            </div>
            <input
                type="submit"
                value="Update"
                className='w-full bg-sky-600 uppercase font-bold  text-white p-2 rounded-md text-lg'
            />
            </form>
         </div>
         </>
      ) 
        }
    </>
  )
}

export default EdicionUsuario