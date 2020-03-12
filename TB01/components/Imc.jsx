import React from 'react';
import ImcCalc from './ImcCalc';

let peso = 75;
let altura = 1.75;
export default props =>
  <div>
    O IMC para o peso {peso}kg e altura {altura}m é <ImcCalc peso={peso} alt={altura} />
  </div>