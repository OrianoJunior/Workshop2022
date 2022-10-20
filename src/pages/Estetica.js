import React from 'react'
import Cursos from '../componentes/Cursos'
import foto from '../Imagens/ESTETICA.jpg'
const Estetica = () => {
  return (
    <div>
      <div className='cursos-principal'>
      <Cursos curso="Estetica" sinopse={'Libero egestas nisl sit maecenas blandit sem euismod quisque vestibulum, curabitur adipiscing sed eleifend libero pretium velit vel fringilla, litora a lacinia nunc platea ornare donec ipsum. diam mauris inceptos porta ad augue aliquet gravida litora, posuere sodales fermentum velit vel aliquam magna, euismod et ultrices vivamus aliquam ultrices venenatis.'} foto={foto}/>
    </div>
    </div>
  )
}

export default Estetica
