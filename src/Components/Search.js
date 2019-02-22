import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLInputObjectType } from 'graphql';
import * as queries from '../graphql/queries';
import SearchCard from './SearchCard';
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
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pacientes: [],
      search: ''
    };
    this.getPacientes = this.getPacientes.bind(this);
    this.searchPaciente = this.searchPaciente.bind(this);
    this.onChangeSearchBar = this.onChangeSearchBar.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  getPacientes = async () => {
    const allPacients = await API.graphql(graphqlOperation(queries.listPacientes));
    this.setState({ pacientes: allPacients.data.listPacientes.items });
  };
  searchPaciente = async (paciente) => {
    const searchedPacients = await API.graphql(graphqlOperation(queries.searchPacientes, paciente));
    console.log('search', searchedPacients);
    this.setState({ pacientes: searchedPacients.data.searchPacientes.items });
  };
  onClickCard = (paciente) => {
    this.props.dispatch(seleccionarPaciente(paciente));
    this.props.history.push('/paciente');
  };
  onChangeSearchBar = (event) => {
    const value = event.target.value;
    this.handleFilter(value);
  };
  handleFilter = debounce((value) => {
    const filtroPaciente = { filter: { nombre: { matchPhrasePrefix: value } } };
    //ew GraphQLInputObjectType({ name: 'filter', fields: { nombre: value } }); //{ filter: { nombre: value } };
    this.searchPaciente(filtroPaciente);
  }, 500);
  render() {
    const listPacients = rawDataToComponentList(this.state.pacientes, SearchCard, this.onClickCard);
    return (
      <div>
        <StyledSearchBar onChange={this.onChangeSearchBar} />
        {this.state.pacientes ? listPacients : <div>Searching...</div>}
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Search);
