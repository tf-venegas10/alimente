import React from 'react';
import { Route } from 'react-router-dom';
import NuevoAlimento from './NuevoAlimento';
import AlimentoCard from './AlimentoCard';
const PacientHome = (props) => {
  return (
    <div>
      <Route path="/alimento/nuevo" component={NuevoAlimento} />
      <Route exact path="/alimento" component={AlimentoCard} />
    </div>
  );
};

export default PacientHome;
