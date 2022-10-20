import React from 'react'
import Cursos from '../componentes/Cursos'
import foto from '../Imagens/edif.jpg'

const Edif = () => {
  return (
    <div className='cursos-principal'>
      <Cursos curso="Edificações" sinopse={'Libero egestas nisl sit maecenas blandit sem euismod quisque vestibulum, curabitur adipiscing sed eleifend libero pretium velit vel fringilla, litora a lacinia nunc platea ornare donec ipsum. diam mauris inceptos porta ad augue aliquet gravida litora, posuere sodales fermentum velit vel aliquam magna, euismod et ultrices vivamus aliquam ultrices venenatis. '} foto={foto}/>
    </div>
  )
}

export default Edif