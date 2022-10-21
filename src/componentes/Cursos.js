import React, { useEffect } from 'react';
import '../styles/cursos.css';
import '../styles/slide.css';
import '../styles/style.css';
import { motion} from 'framer-motion';
import  placeholder1 from "../Imagens/placeholder1.png"
import  placeholder2 from "../Imagens/placeholder2.png"
import  placeholder3 from "../Imagens/placeholder1.png"
import  placeholder4 from "../Imagens/placeholder2.png"
const placeholders = [placeholder1,  placeholder2,  placeholder3,  placeholder4]
const Cursos = ({ curso, sinopse, foto }) => {
  const carousel = React.useRef();
  const [width, setWidth] =  React.useState(0)

  useEffect(()=>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <div className="cursos">
      <h1 curso={curso} className="cursoTitulo">
        {curso}
      </h1>
      <div className='tp'>

      
      
      <motion.div
      initial={{opacity:0}}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 0.3,
        x: { duration: 1 },
        default: { ease: "linear" }
      }}>
        <img src={foto} className="foto" />
      </motion.div>

        <p className="descricao" sinopse={sinopse}>
          {sinopse}
        </p>

      </div>
      <div className='slide'>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div className='inner'
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{x:400}}
          animate={{x:0}}
          transition={{duration: 0.8}}
          >

            {placeholders.map(placeholder =>(
              <motion.div className='item' key={placeholder}>
                <img src={placeholder}/>
              </motion.div>
            ))}
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cursos;
