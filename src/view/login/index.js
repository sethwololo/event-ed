/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { toastSucesso, toastErro } from '../../config/toastr';

import { useSelector, useDispatch } from 'react-redux';


//  const loginSucesso = () => toastr["success"](" ", "Usuário logado com sucesso! &#128518;"); // Toast de sucesso ao logar
//  const loginErro = () => toastr["error"](" ", "Verifique se seu Email e Senha estão corretos! &#128529;"); // Toast de erro ao logar


const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const dispatch = useDispatch();

  const logar = async () => {
    try {
      const resultado = await firebase.auth().signInWithEmailAndPassword(email, senha);
      if (resultado) {
        setTimeout(() => {
          dispatch({ type: 'LOG_IN', usuarioEmail: email });
        }, 500);
        return toastSucesso('Logado com sucesso! &#128518;');
      }
    } catch (erro) {
      return toastErro('Verifique se seu Email e Senha estão corretos! &#128529;');
    }
  }


  return (
    <div className="login-content d-flex align-items-center">

      {useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null}

      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 display-4 font-weight-bold text-white">Login</h1>
        </div>

        <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required />
        <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required />

        <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>

        <div className="opcoes-login mt-3 text-center">
          <Link to="novousuario" className="mx-2">Cadastrar-se</Link>
          <span>&#128214;</span>
          <Link to="" className="mx-2">Redefinir senha</Link>
        </div>
        <div className="btn-voltar mt-3 text-center font-weight-bold">
          <Link to="/" className="mx-2">Página inicial</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;