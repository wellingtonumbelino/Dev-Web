import React from 'react';

export default (props) =>
  <div>
    <ul>
      <li>Nome: {props.nome}</li>
      <li>Idade: {props.idade}</li>
      <li>Curso: {props.curso}</li>
      <li>Cidade: {props.cidade} </li>
    </ul>
  </div>