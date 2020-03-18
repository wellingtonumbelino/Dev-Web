import React from 'react'

export default props =>
  <div>
    <h2>Curso: {props.nome}</h2>
    {
      React.Children.map(props.children, turma => {
        return React.cloneElement(turma, { ...props })
      })
    }
  </div>