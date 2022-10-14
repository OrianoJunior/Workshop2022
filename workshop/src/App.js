import React from 'react'
import "./styles/estilos.css"
import Menu from './Menu'
import Inicio from './componentes/Inicio'
import Edif from './componentes/Edif'
import Redes from './componentes/Redes'
import Estetica from './componentes/Estetica'
import Cronograma from './componentes/Cronograma'
import Localizacao from './componentes/Localizacao'

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
}else if(post == "/localizacao"){
  Tela = < Localizacao/>
}



  return (
    <div>
      <Menu/>
      {Tela}
    </div>
  )
}

export default App
