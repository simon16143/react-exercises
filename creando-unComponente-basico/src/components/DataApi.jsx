import React from 'react'

const DataApi = (props) => {
  const {data} = props
    return (
    <div>
        {data.map((model)=>
        
        <p key={model.codigo} className='font-bold uppercase text-sm text-center text-sky-600 mt-5'>{model.nome}</p>
        )}    

    </div>
  )
}

export default DataApi