import React from 'react'
import ReactDOM from 'react-dom'

import Curso from './components/Curso'
import Turma from './components/Turma'
import Estudante from './components/Estudante'

const root = document.getElementById('root')

ReactDOM.render(
  <div>
    <Curso curso='Sistemas de Informação'>
      <Turma turma='FUP'>
        <Estudante nome='Wellington' />
      </Turma>
    </Curso>
  </div>, root)