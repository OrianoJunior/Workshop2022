import React from 'react'
import Menu from './Menu'
import Inicio from './pages/Inicio'
import Edif from './pages/Edif'
import Redes from './pages/Redes'
import Estetica from './pages/Estetica'
import Cronograma from './pages/Cronograma'
import Cabesalho from './Cabesalho'



const App = () => {

const post = window.location.pathname
console.log(post);
let Tela
if (post == '/') {
  Tela = <Inicio />
}else if(post == "/Edificacoes"){
  Tela = <Edif />
}else if(post == "/Redes_de_computadores"){
  Tela = < Redes/>
}else if(post == "/Estetica"){
  Tela = <Estetica/>
}else if(post == "/cronograma"){
  Tela = < Cronograma/>
}



  return (
    <div>
      <Menu/>
      {Tela}
      <Cabesalho/>
    </div>
  )
}

export default App
