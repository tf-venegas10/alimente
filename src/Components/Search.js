import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLInputObjectType } from 'graphql';
import * as queries from '../graphql/queries';
import { PacienteSearchCard } from './SearchCard';
import { connect } from 'react-redux';
import { seleccionarPaciente } from '../ActionCreators';
import { fechaAEdad } from '../Formulas';
import { FormGroup, Input, Row, Col, Label } from 'reactstrap';
import styled from 'styled-components';
import { debounce } from 'lodash';
const SearchBar = ({ className, onChange }) => (
  <FormGroup className={className}>
    <label htmlFor="searchBar">
      <Row>
        <Col sm={12} md={2}>
          Buscar paciente por nombre
        </Col>
        <i className="fas fa-search" />
        <Col sm={11} md={9}>
          <Input type="search" name="search" id="searchBar" placeholder="...comience a escribir" onChange={onChange} />
        </Col>
      </Row>
    </label>
  </FormGroup>
);

const StyledSearchBar = styled(SearchBar)`
  margin: 1em;
  label {
    width: 100%;
  }
  i {
    background-color: white;
    border: solid 1px 'rgba(55,55,55)';
  }
`;

const rawDataToComponentList = (data, Component, onClickHandler) => {
  let years = 0;
  let months = 0;
  const listPacients = data.map((paciente) => {
    [years, months] = fechaAEdad(paciente.fechaNacimiento);
    const pacienteConEdad = { ...paciente };
    pacienteConEdad.anos = years;
    pacienteConEdad.meses = months;
    return (
      <Component
        key={paciente.id}
        nombre={paciente.nombre}
        genero={paciente.genero}
        identificacion={paciente.documento}
        anos={years}
        meses={months}
        onClick={() => onClickHandler(pacienteConEdad)}
      />
    );
  });
  return listPacients;
};
const Search = ({ dispatch, history }) => {
  const [pacientes, setPacientes] = useState([]);
  /*const getPacientes = async () => {
    const allPacients = await API.graphql(graphqlOperation(queries.listPacientes));
    setPacientes(allPacients.data.listPacientes.items );
  };*/
  const searchPaciente = async (paciente) => {
    const searchedPacients = await API.graphql(graphqlOperation(queries.searchPacientes, paciente));
    setPacientes(searchedPacients.data.searchPacientes.items);
  };
  const onClickCard = (paciente) => {
    dispatch(seleccionarPaciente(paciente));
    history.push('/paciente');
  };
  const onChangeSearchBar = (event) => {
    const value = event.target.value;
    handleFilter(value);
  };
  const handleFilter = debounce((value) => {
    const filtroPaciente = { filter: { nombre: { matchPhrasePrefix: value } } };
    searchPaciente(filtroPaciente);
  }, 150);

  const listPacients = rawDataToComponentList(pacientes, PacienteSearchCard, onClickCard);
  return (
    <div>
      <StyledSearchBar onChange={onChangeSearchBar} />
      {pacientes ? listPacients : <div>Searching...</div>}
    </div>
  );
};

export default connect(
  null,
  null
)(Search);
