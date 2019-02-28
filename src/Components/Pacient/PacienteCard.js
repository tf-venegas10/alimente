import React from 'react';
import { Col, Row, CardBody } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { activoComida } from '../../Formulas';
const RequerimientosCaloricos = ({ paciente, className }) => (
  <div className={className}>
    <h3>Requerimientos caloricos</h3>
    <Row>
      <Col sm={4}>Calorias: {paciente.calorias} Kcal</Col>
      <Col sm={4}>Proteinas: {paciente.proteinasGramos} g</Col>
      <Col sm={4}>Carbohidratos: {paciente.carbohidratosGramos} g</Col>
      <Col sm={4}>Grasas: {paciente.grasasGramos} g</Col>
      <Col sm={4}>Fibras: {paciente.fibrasGramos} g</Col>
    </Row>
  </div>
);

const StyledRequerimientosCaloricos = styled(RequerimientosCaloricos)`
  background-color: white;
`;

const PacientCard = ({ paciente, className }) => (
  <CardBody className={className}>
    <Row>
      <Col sm={6}>Nombre: {paciente.nombre}</Col>
      <Col sm={6}>
        <img src="/image-placeholder-300x275.jpeg" alt="foto del paciente" />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>Tipo de documento: {paciente.tipoDocumento}</Col>
      <Col sm={6}>Número de documento: {paciente.documento}</Col>
    </Row>
    <Row>
      <Col sm={6}>
        Edad: {paciente.anos} años {paciente.meses} meses
      </Col>
      <Col sm={6}>Genero: {paciente.genero}</Col>
    </Row>
    <Row>
      <Col sm={6}>Peso: {paciente.pesoKg} kg</Col>
      <Col sm={6}>Altura: {paciente.alturaCm} cm</Col>
    </Row>
    <StyledRequerimientosCaloricos paciente={paciente} />

    <Row>
      {activoComida(paciente.activoDesayuno, paciente.activoDesayunoHasta) ? (
        <Col sm={4}>Pidió desayuno hoy.</Col>
      ) : (
        <div />
      )}
      {activoComida(paciente.activoAlmuerzo, paciente.activoAlmuerzoHasta) ? (
        <Col sm={4}>Pidió almuerzo hoy.</Col>
      ) : (
        <div />
      )}
      {activoComida(paciente.activoComida, paciente.activoComidaHasta) ? <Col sm={4}>Pidió comida hoy.</Col> : <div />}
    </Row>
  </CardBody>
);

const StyledPacientCard = styled(PacientCard)`
  border: solid 2px;
  margin: 0.5vh;
  z-index: 1000;
  background-color: #7c8cff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StyledPacientCard);
