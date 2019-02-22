import React from 'react';
import { FormGroup, Input, Row, Col } from 'reactstrap';
import { crearPaciente } from '../../ActionCreators';
import { Form, H1, PrimaryButton } from '../../StyledComponents';
import FormsHandler from '../FormsHandler';
import { ritmoMetabolicoBasal, fechaAEdad, requerimientosMacros } from '../../Formulas';

const transform = (item) => {
  let resultItem = { ...item };
  console.log('transform', item);
  if (!item.pesoKg || !item.alturaCm || !item.genero || !item.fechaNacimiento) return {};
  const [years, months] = fechaAEdad(item.fechaNacimiento);
  resultItem.calorias = ritmoMetabolicoBasal(item.pesoKg, item.alturaCm, item.genero, years);
  const [proteinasGramos, carbohidratosGramos, grasasGramos, fibrasGramos] = requerimientosMacros(
    resultItem.calorias,
    resultItem.pesoKg
  );
  resultItem.fibrasGramos = fibrasGramos;
  resultItem.grasasGramos = grasasGramos;
  resultItem.carbohidratosGramos = carbohidratosGramos;
  resultItem.proteinasGramos = proteinasGramos;
  return resultItem;
};

const NewPacient = ({ onChange, item, onSubmit, onClickCheckBox }) => {
  console.log('paciente nuevo', item);
  return (
    <div>
      <H1>Crear paciente nuevo</H1>
      <Form>
        <FormGroup>
          <label>
            Nombre del paciente: <Input value={item.nombre} onChange={onChange('nombre')} />
          </label>
        </FormGroup>

        <FormGroup>
          <label htmlFor="documentSelect">
            {' '}
            Tipo de documento
            <Input
              value={item.tipoDocumento}
              type="select"
              name="tipoDocumento"
              id="documentSelect"
              onChange={onChange('tipoDocumento')}
            >
              <option value={'cc'}>C.C.</option>
              <option value={'ti'}>T.I.</option>
            </Input>
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Documento: <Input value={item.documento} onChange={onChange('documento')} />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Fecha de nacimiento:{' '}
            <Input onChange={onChange('fechaNacimiento')} type="date" value={item.fechaNacimiento} />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="genderSelect">
            {' '}
            Genero
            <Input value={item.genero} type="select" name="Genero" id="genderSelect" onChange={onChange('genero')}>
              <option value={'Hombre'}>Hombre</option>
              <option value={'Mujer'}>Mujer</option>
            </Input>
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Peso (en kg): <Input value={item.pesoKg} onChange={onChange('pesoKg')} type="number" />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Altura (en cm): <Input value={item.alturaCm} onChange={onChange('alturaCm')} type="number" />
          </label>
        </FormGroup>
        <Row>
          <Col sm={4}>
            <FormGroup>
              <Row>
                <Col xs={9}>
                  <label htmlFor="checkboxDesayuno">Pedir desayuno </label>
                </Col>
                <Col xs={3}>
                  <Input
                    checked={item.activoDesayuno}
                    onChange={onClickCheckBox('activoDesayuno')}
                    type="checkbox"
                    id="checkboxDesayuno"
                  />
                </Col>
              </Row>
              {item.activoDesayuno && (
                <FormGroup>
                  <label>
                    Desayuno hasta:{' '}
                    <Input onChange={onChange('activoDesayunoHasta')} type="date" value={item.activoDesayunoHasta} />
                  </label>
                </FormGroup>
              )}
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Row>
                <Col xs={9}>
                  <label htmlFor="checkboxAlmuerzo">Pedir almuerzo </label>
                </Col>
                <Col xs={3}>
                  <Input
                    checked={item.activoAlmuerzo}
                    onChange={onClickCheckBox('activoAlmuerzo')}
                    type="checkbox"
                    id="checkboxAlmuerzo"
                  />
                </Col>
              </Row>
              {item.activoAlmuerzo && (
                <FormGroup>
                  <label>
                    Almuerzo hasta:{' '}
                    <Input onChange={onChange('activoAlmuerzoHasta')} type="date" value={item.activoAlmuerzoHasta} />
                  </label>
                </FormGroup>
              )}
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <Row>
                <Col xs={9}>
                  <label htmlFor="checkboxComida">Pedir comida </label>
                </Col>
                <Col xs={3}>
                  <Input
                    checked={item.activoComida}
                    onChange={onClickCheckBox('activoComida')}
                    type="checkbox"
                    id="checkboxComida"
                  />
                </Col>
              </Row>
            </FormGroup>
            {item.activoComida && (
              <FormGroup>
                <label>
                  Comida hasta:{' '}
                  <Input onChange={onChange('activoComidaHasta')} type="date" value={item.activoComidaHasta} />
                </label>
              </FormGroup>
            )}
          </Col>
        </Row>

        <FormGroup>
          <PrimaryButton onClick={onSubmit('createPaciente', crearPaciente, '/paciente', transform)}>
            Agregar paciente
          </PrimaryButton>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormsHandler(NewPacient);
