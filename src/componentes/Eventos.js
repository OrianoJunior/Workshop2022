import React from 'react'
const Eventos = ({Tema, palestrante, hora, texto}) => {
  return (
    <div className='eventos'>
      <h1 className='Tema' Tema={Tema}>{Tema}</h1>
      <div>
        <h2 palestrante={palestrante}>palestrante: {palestrante}</h2>
        <h2 hora={hora}>Hora: {hora}</h2>
      </div>
      
      <p texto={texto}>{texto}</p>
    </div>
  )
}


export default Eventos
