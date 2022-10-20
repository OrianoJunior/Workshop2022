import React from 'react';
import '../styles/cursos.css';
const Cursos = ({ curso, sinopse, foto }) => {
  return (
    <div className="cursos">
      <h1 curso={curso} className="cursoTitulo">
        {curso}
      </h1>
      <p className="descricao" sinopse={sinopse}>
        {sinopse}
      </p>
      <img src={foto} className="foto" />
    </div>
  );
};

export default Cursos;
