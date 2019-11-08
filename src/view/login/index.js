import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth'
import toastr from 'toastr';
import 'toastr/build/toastr.css';



//  Configurações do toastr
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "150",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

const loginSucesso = () => toastr["success"](" ", "Usuário logado com sucesso! &#128518;"); // Toast de sucesso ao logar
const loginErro = () => toastr["error"](" ", "Verifique se seu Email e Senha estão corretos! &#128529;"); // Toast de erro ao logar


const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const logar = async () => {
    try {
      const resultado = await firebase.auth().signInWithEmailAndPassword(email, senha);
      return loginSucesso();
    } catch (erro) {
      return loginErro();
    }
  }

  return (
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 display-4 font-weight-bold text-white">Login</h1>
        </div>

        <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required />
        <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required />

        <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>

        <div className="opcoes-login mt-3 text-center">
          <a href="#" className="mx-2">Cadastrar-se</a>
          <span>&#128214;</span>
          <a href="#" className="mx-2">Redefinir senha</a>
        </div>
      </form>
    </div>
  );
}

export default Login;