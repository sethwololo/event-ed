import React, { useState } from 'react'
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';
import { toastSucesso, toastErro } from '../../config/toastr';

const NovoUsuario = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [loading, setLoading] = useState();

  const cadastrar = async () => {

    setLoading(true);

    if (!email || !senha) {
      setLoading(false);
      return toastErro('É necessário informar um email e uma senha para realizar o cadastro! &#128529;');
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, senha);
      toastSucesso('Usuário cadastrado com sucesso! &#128518;');
      setLoading(false);
    } catch (erro) {
      setLoading(false);
      let msgErro = '';
      switch (erro.message) {
        case 'Password should be at least 6 characters':
          msgErro = 'A senha deve ter pelo menos 6 caracteres! &#128529;';
          break;
        case 'The email address is already in use by another account.':
          msgErro = 'O Email já está sendo utilizado por outro usuário! &#128529;';
          break;
        case 'The email address is badly formatted.':
          msgErro = 'O formato do email é inválido! &#128529;';
          break;
        default:
          msgErro = 'Não foi possível cadastrar. Tente novamente mais tarde! &#128529;';
          break;
      }
      toastErro(msgErro);
      msgErro = null;
    }

  }

  return (
    <div className="signup-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 display-4 font-weight-bold text-white">Cadastro</h1>
        </div>

        <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required />
        <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required />

        {
          loading ? <div class="spinner-border text-light text-center" role="status"><span class="sr-only">Carregando...</span></div>
            : <button onClick={cadastrar} className="btn btn-lg btn-block btn-signup my-4" type="button">Cadastrar-se</button>
        }

      </form>
    </div>
  );
}

export default NovoUsuario;