import React from 'react'
import { motion } from 'framer-motion'
const Eventos = ({Tema, palestrante, hora, texto}) => {
  return (
    <div className='eventos'>

    <motion.div 
    initial={{x:-600}}
    animate={{
      x:0
    }}
      transition={{
        x: { duration: 3 },
        default: { ease: "easeIn" }
      }}>
      <h1 className='Tema' Tema={Tema}>{Tema}</h1>
    </motion.div>

    <motion.div
    initial={{x:-300}}
    animate={{
      x:0
    }}
    transition={{
      delay: 2,
      x: { duration: 2 },
      default: { ease: "linear" }
    }}>

    
      <div>
        <h2 palestrante={palestrante}>Palestrante: {palestrante}</h2>
        <h2 hora={hora}>Hora: {hora}</h2>
      </div>
      <p texto={texto}>{texto}</p>
      </motion.div>

    </div>
  )
}


export default Eventos
