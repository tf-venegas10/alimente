import React from 'react';
import { Col, Row, CardBody } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { activoComida } from '../../Formulas';
const RequerimientosCaloricos = ({ alimento, className }) => (
  <div className={className}>
    <Row>
      <Col sm={4}>Calorias: {alimento.calorias} Kcal</Col>
      <Col sm={4}>Proteinas: {alimento.proteinasGramos} g</Col>
      <Col sm={4}>Carbohidratos: {alimento.carbohidratosGramos} g</Col>
      <Col sm={4}>Grasas: {alimento.grasasGramos} g</Col>
      <Col sm={4}>Fibras: {alimento.fibrasGramos} g</Col>
    </Row>
  </div>
);

const StyledRequerimientosCaloricos = styled(RequerimientosCaloricos)`
  background-color: white;
`;

const AlimentoCard = ({ alimento, className }) => (
  <CardBody className={className}>
    <Row>
      <Col sm={6}>Nombre: {alimento.nombre}</Col>
      <Col sm={6}>Unidad: {alimento.unidad}</Col>
    </Row>
    <StyledRequerimientosCaloricos alimento={alimento} />

  </CardBody>
);

const StyledPacientCard = styled(AlimentoCard)`
  border: solid 2px;
  margin: 0.5vh;
  z-index: 1000;
  background-color:'rgb(29,209,85)';
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StyledPacientCard);
