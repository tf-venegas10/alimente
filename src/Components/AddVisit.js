import React from 'react';
import { Form, H3, PrimaryButton } from '../StyledComponents/index';
import { FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import ForForms from './FormsHandler';

const BigInput = styled(Input)`
  height: 25vh !important;
  width: 90vw;
`;
const AddVisit = ({ paciente }) => (
  <div>
    <H3>Agregar una visita del paciente {paciente.nombre}</H3>
    <Form>
      <FormGroup>
        <label>
          Entrada de la consulta <BigInput type="textarea" />
        </label>
      </FormGroup>
      <PrimaryButton>Guardar visita</PrimaryButton>
    </Form>
  </div>
);

export default ForForms(AddVisit);
