import React from 'react'

//Componentes
//Function normal
/*function olaMundo() {
  return <h1>Olá mundo dos Componetes React</h1>
}*/
//export default olaMundo

//Function Arrow
/*export default () => {
  return <div>
    <h1>Hello, my baby, tô te ligando, atende aí</h1>
  </div>
}
*/
/*
//Fuction Arrow-2
export default () =>
  <div>
    <h1>Oi de novo!</h1>
    <h3>Vem k neném</h3>
  </div>
*/

//Usando propriedades
/*export default (props) =>
  <div>
    <h1>{props.nome}</h1>
    <h1>{props.sobrenome}</h1>
  </div>*/

export default (props) =>
  <div>
    <ul>
      <li>Nome: {props.nome}</li>
      <li>Idade: {props.idade}</li>
      <li>Curso: {props.curso}</li>
      <li>Cidade: {props.cidade} </li>
    </ul>
  </div>