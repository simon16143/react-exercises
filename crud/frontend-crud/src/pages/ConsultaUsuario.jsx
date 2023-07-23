import {useState} from 'react'
import Alerta from '../components/Alerta'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const ConsultaUsuario = () => {
    const [email,setEmail] = useState('')
    const [alerta,setAlerta] = useState(false)
    const [card, setCard] = useState('')
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        if([email].includes('')){
            setAlerta({
                msg:"El campo es obligatorio",
                error:true
            })
            return
        }
       
        try{
            const {data} = await axios.post('http://localhost:3000/api/usuarios/consultar-usuario',{email})
            console.log(data)
            localStorage.setItem('nombre', data.nombre)
            
            

        }
        
        catch(e){
            setAlerta({
                msg:e.response.data.msg,
                error:true
            })
        } 
        navigate('/bienvenida-usuario') 
       

    }


    const {msg} = alerta 
  return (
    <>
    <h1 className='text-sky-600 text-4xl text-center mt-5 font-black'>User's Query</h1>
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className='bg-white shadow-md  md:w-1/2 mt-5 rounded-md p-3'>
            {msg && <Alerta alerta={alerta}/>}
            <div className='mb-5'>
                <label htmlFor="email" className='font-bold uppercase text-sm '>Email <span className='text-red-600'>*</span></label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Type the email you want to find'
                    className='w-full mt-3 border-spacing-2 p-3 bg-slate-100 rounded-md'
                />
            </div>
            <input
             type="submit"
             value="Search"
             className='font-bold  text-white text-xl uppercase w-full shadow-xl rounded-md bg-sky-600 text-center p-3'
            />
        </form>
    </div>
    </>
  )
}

export default ConsultaUsuario