import React from 'react';
import { Route } from 'react-router-dom';

import PacienteCard from './PacienteCard';
import NuevoPaciente from './NuevoPaciente';

const PacientHome = (props) => {
  return (
    <div>
      <Route exact path="/paciente" component={PacienteCard} />
      <Route path="/paciente/nuevo" component={NuevoPaciente} />
    </div>
  );
};

export default PacientHome;
