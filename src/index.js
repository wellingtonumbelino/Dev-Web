
import React from 'react';
import ReactDOM from 'react-dom';

//Usando props
import OlaMundo from './components/OlaMundo';

const root = document.getElementById('root');
ReactDOM.render(<OlaMundo nome='Wellington'
  idade='19'
  curso='Sistemas de Informação'
  cidade='Mombaça-CE'
/>, root);

/*
//Usando function
const root = document.getElementById('root');
ReactDOM.render(<OlaMundo />, root);
*/
//Exemplo com JSX
/*
import React from 'react';
import ReactDOM from 'react-dom';

//Atribuindo HTML a uma const
const list =
  <ul>
    <li>1-) Superman</li>
    <li>2-) Batman</li>
    <li>3-) Wonder Woman</li>
  </ul>;

ReactDOM.render(list, root);

/*
//Exemplo sem JSX
const root = document.getElementById('root');

//criando os elementos UL e LI
let ul = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');

//criando os elementos de LI
let text1 = document.createTextNode('1-) Superman');
let text2 = document.createTextNode('2-) Batman');
let text3 = document.createTextNode('3-) Wonder Woman');

li1.appendChild(text1);
li2.appendChild(text2);
li3.appendChild(text3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

root.appendChild(ul);
*/