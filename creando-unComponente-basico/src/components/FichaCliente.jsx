

const FichaCliente = (props) => {
    const {info} = props
    return (
    <>
     <h1 className="uppercase font-bold text-center mt-5 tex-4xl">{info.nombre}</h1>
     <h2 className="uppercase text-gray-500 text-center">{info.cargo}</h2>
     <h2 className="uppercase text-gray-500 text-center">{info.salario}</h2>

    
    </>
  )
}
export default FichaCliente