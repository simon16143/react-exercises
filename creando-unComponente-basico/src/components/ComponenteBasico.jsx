import {useState} from 'react'
import Alerta from './Alerta'

const ComponenteBasico = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})
    const handleSubmit = e => {
        e.preventDefault();
        if([nombre, email, password].includes('')){
            setAlerta({
                msg:'Todos los campos son obligatorios',
                error:true
            })
        }else{
            setAlerta({
                msg:`Bienvenido ${nombre}`,
                error:false
            })
            localStorage.setItem('nombre', nombre)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            setNombre('')
            setEmail('')
            setPassword('')
        } 

    }
    
    const {msg} = alerta
  return (
    <>
        <div className='mt-10 flex justify-center'>
            
            <form  onSubmit={handleSubmit} className='py-10 px-5 bg-white  md:w-1/2 shadow rounded-lg'>
            {msg && <Alerta alerta={alerta}/>}
                <div className='mb-5'>
                    <label className='font-bold text-sm uppercase text-gray-700'>Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                        placeholder='Escribe tu nombre...'
                        className='w-full bg-gray-50 p-3 mt-3 rounded-lg'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='font-bold text-sm uppercase text-gray-700'>Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder='Escribe tu Email...'
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        className='w-full bg-gray-50 p-3 mt-3 rounded-lg'
                    />
                </div>

                <div className='mb-5'>
                    <label className='font-bold text-sm uppercase text-gray-700'>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder='Escribe tu password...'
                        className='w-full bg-gray-50 p-3 mt-3 rounded-lg'
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                </div>

                <input
                 type="submit"
                 value="Enviar"
                 className='w-full bg-sky-700 text-white font-bold p-3 uppercase rounded-lg'                
                />


            </form>
        </div>
    
    </>
  )
}

export default ComponenteBasico