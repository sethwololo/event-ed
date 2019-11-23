import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const usuarioLogado = useSelector(state => state.usuarioLogado);
  return (
    <Route {...rest} render={props => (
      usuarioLogado ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;