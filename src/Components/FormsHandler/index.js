import React from 'react';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { CloudFormation } from 'aws-sdk/clients/all';
import * as mutations from '../../graphql/mutations';
import { Alert } from 'reactstrap';

const FormsHandler = (WrappedComponent) =>
  connect()(
    class FormUtility extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          item: {
            nombre: '',
            fechaNacimiento: '',
            tipoDocumento: 'cc',
            documento: '',
            genero: 'Hombre',
            activoComida: true,
            activoAlmuerzo: true,
            activoDesayuno: true
          },
          error: false
        };
        this.alertRef = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
      }

      onChange(inputValue) {
        return (evt) => {
          evt.persist();
          console.log('event', evt);
          this.setState((prevState) => {
            let newState = { ...prevState };
            newState.item[inputValue] = evt.target.value;
            return newState;
          });
        };
      }
      onClickCheckBox(inputValue) {
        return () => {
          this.setState((prevState) => {
            let newState = { ...prevState };
            newState.item[inputValue] = newState[inputValue] ? false : true;
            return newState;
          });
        };
      }
      onSubmit = (mutationName, actionCreator, redirectRoute, transformationBefore) => async () => {
        const mutation = mutations[mutationName];
        let item = this.state.item;
        if (transformationBefore) {
          item = transformationBefore(item);
        }
        actionCreator && this.props.dispatch(actionCreator(item));
        try {
          const mut = await API.graphql(graphqlOperation(mutation, { input: item })).data[mutationName];
          redirectRoute && this.props.history.push(redirectRoute);
          console.log('onsubmit', 'mutation', mut);
          this.setState({ error: false });
        } catch (e) {
          console.error('ERROR', e);
          this.setState({ error: true }, () => {
            window.scrollTo(0, this.alertRef.current.offsetTop);
          });
        }
      };
      render() {
        return (
          <React.Fragment>
            <WrappedComponent
              onChange={this.onChange}
              item={this.state.item}
              onSubmit={this.onSubmit}
              onClickCheckBox={this.onClickCheckBox}
            />
            {this.state.error && (
              <Alert color="danger">Los datos ingresados estan incompletos o son incorrectos.</Alert>
            )}
            <div ref={this.alertRef} />
          </React.Fragment>
        );
      }
    }
  );
export default FormsHandler;
