import React from 'react';

export default props => {
  let imc = props.imc;
  if (imc <= 19) {
    return <strong>Abaixo do peso</strong>
  } else if (imc > 19 && imc <= 25) {
    return <strong>Peso normal</strong>
  } else if (imc > 25) {
    return <strong>Acima do peso</strong>
  }
}