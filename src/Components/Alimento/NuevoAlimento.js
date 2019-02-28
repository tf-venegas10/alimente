import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { Form, H1, PrimaryButton } from '../../StyledComponents';
import FormsHandler from '../FormsHandler';

const NuevoAlimento = ({ onChange, item, onSubmit, onClickCheckBox }) => (
  <div>
    <H1>Crear alimento nuevo</H1>
    <Form>
      <FormGroup>
        <label>
          Nombre del alimento: <Input value={item.nombre} onChange={onChange('nombre')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label htmlFor="calorias">
          {' '}
          Calorias
          <Input id="calorias" value={item.calorias} onChange={onChange('calorias')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Proteinas (en g): <Input value={item.proteinas} onChange={onChange('proteinas')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Carbohidratos (en g): <Input value={item.carbohidratos} onChange={onChange('carbohidratos')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Grasas (en g): <Input value={item.grasas} onChange={onChange('grasas')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Fibras (en g): <Input value={item.fibras} onChange={onChange('fibras')} />
        </label>
      </FormGroup>
      <FormGroup>
        <label>
          Unidad (en g): <Input value={item.unidad} onChange={onChange('unidad')} />
        </label>
      </FormGroup>
      <FormGroup>
        <PrimaryButton onClick={onSubmit('createAlimento', null, '/alimento', null)}>Agregar alimento</PrimaryButton>
      </FormGroup>
    </Form>
  </div>
);

export default FormsHandler(NuevoAlimento);
