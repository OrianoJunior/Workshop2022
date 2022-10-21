import React from 'react'
import Menu from './Menu'
import Inicio from './pages/Inicio'
import Edif from './pages/Edif'
import Redes from './pages/Redes'
import Estetica from './pages/Estetica'
import Cabesalho from './Cabesalho'
import Credes from './pages/Credes'
import Cest from './pages/Cest'
import Cedif from './pages/Cedif'



const App = () => {

const post = window.location.pathname

let Tela
if (post == '/') {
  Tela = <Inicio />
}else if(post == "/Edificacoes"){
  Tela = <Edif />
}else if(post == "/Redes_de_computadores"){
  Tela = < Redes/>
}else if(post == "/Estetica"){
  Tela = <Estetica/>
}else if(post == "/Cronograma_de_Edificacoes"){
  Tela = < Cedif/>
}else if(post == "/Cronograma_de_Redes_de_computadores"){
  Tela = < Credes/>
}else if(post == "/Cronograma_de_Estetica"){
  Tela = < Cest/>
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
