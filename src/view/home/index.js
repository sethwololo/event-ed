/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';

import { toastSucesso, toastErro } from '../../config/toastr';

const Home = () => {
  return (
    <>
    <Navbar />
    <h1>{useSelector(state => state.usuarioEmail)}</h1>
    <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
    </>
  );
}

export default Home;
