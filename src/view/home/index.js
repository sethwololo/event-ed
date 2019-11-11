/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/';

import  { toastSucesso, toastErro } from '../../config/toastr';

const Home = () => {
  return(
    <Navbar />
  );
}

export default Home;
