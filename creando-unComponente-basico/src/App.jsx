import ComponenteBasico from './components/ComponenteBasico'
import FichaCliente from './components/FichaCliente'
import DataApi from './components/DataApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import axios from 'axios'
import { useEffect,useState } from 'react'


function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  
  const ficha = {
    nombre: 'Symon',
    apellido:'Lopez',
    cargo:'Dev',
    salario:3200
  }
  useEffect(()=>{
     const api = async()=>{
      try{
        const response = await axios('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos')
        setData(response.data.modelos)
        setLoading(false)
      }
      catch(e){
        console.log(e)
        setLoading(false)
      }
     


     } 
     api()
  },[])

if(loading){
  return <p>Cargando...</p>
}
console.log('Datos:', {data})
  
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<AuthLayout/>}/>
        <Route index element={<ComponenteBasico/>}/>
        <Route path='/ficha-cliente' element={<FichaCliente info={ficha}/>}/>
        <Route path='/data-api'element={<DataApi data={data}/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
