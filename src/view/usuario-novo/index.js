import React, { useState } from 'react'
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';
import toastr from '../../config/toastr'

const NovoUsuario = () => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();
  const [msg, setMsg] = useState();

  const cadastrar = () => {
    setMsgTipo(null);

    if(!email || !senha ) {
      setMsgTipo('erro');
      setMsg('É necessário informar o email e senha para fazer o cadastro');
      return;
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

        <button className="btn btn-lg btn-block btn-signup my-4" type="button">Cadastrar-se</button>

        <div className="msg-login text-white text-center my-4">
          {msgTipo === 'sucesso' && <span>Usuário cadastrado com sucesso!</span>}
          {msgTipo === 'erro' && <span><strong>Ops!</strong> Verifique se seu Email e Senha estão corretos!</span>}
        </div>
      </form>
    </div>
  );
}

export default NovoUsuario;