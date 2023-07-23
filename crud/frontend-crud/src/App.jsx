import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Home from './pages/Home'
import ConsultaUsuario from './pages/ConsultaUsuario'
import BienvenidaUsuario from './pages/BienvenidaUsuario'
import EdicionUsuario from './pages/EdicionUsuario'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}/>
        <Route index element={<Home/>}/>
        <Route path="/consultar-usuario" element={<ConsultaUsuario/>}/>
        <Route path="/bienvenida-usuario" element={<BienvenidaUsuario/>}/>
        <Route path="/edicion-usuario" element={<EdicionUsuario/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
