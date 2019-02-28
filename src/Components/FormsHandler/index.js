import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { Alert } from 'reactstrap';

const FormsHandler = (WrappedComponent) =>
  connect()(({ dispatch, history }) => {
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);
    const alertRef = useRef(null);
    useEffect(() => {
      if (error) {
        window.scrollTo(0, alertRef.current.offsetTop);
      }
    });

    function onChange(inputValue) {
      return (evt) => {
        evt.persist();
        const itemCopy = { ...item };
        itemCopy[inputValue] = evt.target.value;
        setItem(itemCopy);
      };
    }
    function onClickCheckBox(inputValue) {
      return () => {
        const itemCopy = { ...item };
        itemCopy[inputValue] = item[inputValue] ? false : true;
        setItem(itemCopy);
      };
    }
    function onSubmit(mutationName, actionCreator, redirectRoute, transformationBefore) {
      return async () => {
        const mutation = mutations[mutationName];
        let itemCopy = { ...item };
        if (transformationBefore) {
          itemCopy = transformationBefore(itemCopy);
        }
        actionCreator && dispatch(actionCreator(itemCopy));
        try {
          let mut = await API.graphql(graphqlOperation(mutation, { input: itemCopy }));
          mut = mut.data[mutationName];
          redirectRoute && history.push(redirectRoute);
        } catch (e) {
          console.error('ERROR', e);
          setError(true);
        }
      };
    }

    return (
      <React.Fragment>
        <WrappedComponent onChange={onChange} item={item} onSubmit={onSubmit} onClickCheckBox={onClickCheckBox} />
        {error && <Alert color="danger">Los datos ingresados estan incompletos o son incorrectos.</Alert>}
        <div ref={alertRef} />
      </React.Fragment>
    );
  });
export default FormsHandler;
