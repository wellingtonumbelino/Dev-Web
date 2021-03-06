import React from 'react'
import ReactDOM from 'react-dom'

import IMCFuncao from './components/imc/IMCFuncao'
const root = document.getElementById('root')
ReactDOM.render(
  <div>
    <IMCFuncao peso={75} altura={1.75} />
  </div>, root)

/*
//Usando props de forma genérica
import CasaGenerico from './components/CasaGenerico';
import Personagem from './components/Personagem'
const root = document.getElementById('root');
ReactDOM.render(
  <div>
    <CasaGenerico casa='Stark' regiao='Norte'>
      <Personagem nome='Arya' />
      <Personagem nome='Sansa' />
    </CasaGenerico>

    <CasaGenerico casa='Targaryan' regiao='Oeste'>
      <Personagem nome='Jhon' />
    </CasaGenerico>
  </div>, root)
*/
/*import Casa from './components/Casa';
const root = document.getElementById('root');

ReactDOM.render(<Casa />, root);
*/
/*import { CapitaoAmerica as Ca, ViuvaNegra as Vn } from './components/Vingadores';
const root = document.getElementById('root');

ReactDOM.render(<div>
  <Ca
    nome='Tony Stark' />
  <Vn
    nome='Grandão' />
</div>, root);
*/
//Usando props
/*
import OlaMundo from './components/OlaMundo';
import Professor from './components/Professor';
import Estudante from './components/Estudante';

const root = document.getElementById('root');

ReactDOM.render(
  <div>
    <Professor
      nome='Jefferson'
      area='Engenharia de Software'
      nivel='Doutorado'
      curso='Sistemas de Informação' />
    <Estudante
      nome='Wellington'
      idade={19}
      curso='Sistemas de Informação'
      cidade='Mombaça-CE' />
  </div>, root);
  */
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