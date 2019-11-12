import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand font-weight-bold text-white" href="#">NomeDoApp</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>

          {
            useSelector(state => state.usuarioLogado) > 0 ?
          <>
          <Link className="nav-item nav-link" to="">Publicar evento</Link>
          <Link className="nav-item nav-link" to="">Meus eventos</Link>
          <Link className="nav-item nav-link" onClick={() => dispatch({ type: 'LOG_OUT'})}>Sair</Link>
          </>
            :
          <>
          <Link className="nav-item nav-link" to="novousuario">Cadastrar</Link>
          <Link className="nav-item nav-link" to="login">Login</Link>
          </>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;