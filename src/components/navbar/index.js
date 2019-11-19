import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../img/icone-evented.svg';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-gradiente">
      <span className="navbar-brand font-weight-bold text-white"><img src={logo} alt="EvenEd" width="36" height="36" /></span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>

          {
            useSelector(state => state.usuarioLogado) > 0 ?
          <>
          <Link className="nav-item nav-link" to="/eventocadastro">Publicar evento</Link>
          <Link className="nav-item nav-link" to="/eventos/meus">Meus eventos</Link>
          <Link className="nav-item nav-link" onClick={() => dispatch({ type: 'LOG_OUT'})}>Sair</Link>
          </>
            :
          <>
          
          <Link className="nav-item nav-link teste" to="/novousuario">Cadastrar</Link>
          <Link className="nav-item nav-link teste" to="/login">Login</Link>
          
          </>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;