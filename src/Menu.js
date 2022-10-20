import React from 'react'
import './styles/estilos.css'
const Menu = () => {
  function Fixo(evento){
    evento.preventDefault()
  }
  return (
    <div className='lista'>
      <nav className='menu'>
        <ul>
          <li><a href='./'>Inicio</a></li>
          <li className='dropdown-menu'><a href='' className='dropbtn' onClick={Fixo}>Cursos</a>
          <ul className='dropdown-header'>
            <li><a href='./Edificacoes'>Edificações</a></li>
            <li><a href='./Redes_de_computadores'>Redes de computadores</a></li>
            <li><a href='./Estetica'>Estetica</a></li>
          </ul>
          </li>
          <li className='dropdown-menu'><a href='' className='dropbtn' onClick={Fixo}>Cronograma</a>
          <ul className='dropdown-header'>
            <li><a href='./Cronograma_de_Edificacoes'>Conheca Edificações</a></li>
            <li><a href='./Cronograma_de_Redes_de_computadores'>Conheca Redes de computadores</a></li>
            <li><a href='./Cronograma_de_Estetica'>Conheca Estetica</a></li>
          </ul>
          </li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Menu
