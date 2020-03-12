import React, { Component } from 'react';

// import { Container } from './styles';
import Personagem from './Personagem';
export default props =>
  <div>
    <Personagem nome='Arya' casa='Stark' />
    <Personagem nome='Robert' casa='Baratheon' />
    <Personagem nome='John' casa='Targaryan' />
  </div>