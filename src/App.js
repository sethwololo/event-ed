import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from '../src/store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from '../src/store/privateRoute';


//  Páginas
import Login from './view/login/';
import NovoUsuario from './view/usuario-novo/';
import Home from './view/home/';
import UsuarioRedefinirSenha from './view/usuario-redefinir-senha/';
import EventoCadastro from './view/evento-cadastro/';
import EventoDetalhes from './view/evento-detalhes/'



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Home} />
          <PrivateRoute path='/eventos/:parametro' component={Home} />
          <Route exact path='/novousuario' component={NovoUsuario} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/usuarioredefinirsenha' component={UsuarioRedefinirSenha} />
          <PrivateRoute exact path='/eventocadastro' component={EventoCadastro} />
          <Route path='/eventodetalhes/:id' component={EventoDetalhes} />
          <PrivateRoute path='/editarevento/:id' component={EventoCadastro} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
