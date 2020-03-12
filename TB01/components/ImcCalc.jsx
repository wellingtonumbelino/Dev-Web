import React from 'react';
import ImcMsg from './ImcMsg';

export default props => {
  let imc = props.peso / (props.alt * props.alt);
  return <div>
    IMC = {imc} <ImcMsg imc={imc} />
  </div>
}