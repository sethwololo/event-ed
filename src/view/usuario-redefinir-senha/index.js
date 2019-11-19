import React, { useState } from 'react';
import './usuario-redefinir-senha.css';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { toastSucesso, toastAviso } from '../../config/toastr';

// import { useSelector, useDispatch } from 'react-redux';

const UsuarioRedefinirSenha = () => {
  const [email, setEmail] = useState();

  const redefinirSenha = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      toastSucesso('Um link de redefinição de senha foi enviado ao seu email!');
    } catch (erro) {
      toastAviso('Verifique se o email está correto!');
    }
  }

  return (
    <div className="redefinir-content d-flex align-items-center">
      <form className="form-redefinir-senha mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 display-4 font-weight-bold text-white">Redefinir<br/>senha</h1>
        </div>

        <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required />

        <button className="btn btn-lg btn-block btn-redefinir" type="button" onClick={redefinirSenha}>Enviar</button>

        <div className="btn-voltar mt-3 text-center">
          <Link to="/login" className="mx-2">Voltar</Link>
        </div>
        <div className="btn-voltar mt-3 text-center font-weight-bold">
          <Link to="/" className="mx-2">Página inicial</Link>
        </div>

      </form>
    </div>
  );
}

export default UsuarioRedefinirSenha;
