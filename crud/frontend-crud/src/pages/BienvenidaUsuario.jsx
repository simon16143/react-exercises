import React from 'react'
import  "../styles/animation.css"

const BienvenidaUsuario = () => {  
   const nombre = localStorage.getItem('nombre')
    return (
    <div>    
    <h1 className='flip font-bold text-4xl  text-center mt-5 text-sky-600'>{`Bienvenid@ ${nombre}`}</h1>
    </div>
  )
}

export default BienvenidaUsuario