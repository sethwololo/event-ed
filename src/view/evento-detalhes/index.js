import React, { useState } from 'react';
import './evento-detalhes.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
//import { toastSucesso, toastErro } from '../../config/toastr';



const EventoDetalhes = () => {



  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <img src="https://via.placeholder.com/1280x720" className="img-banner" alt="banner" />
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-around">
        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-ticket-alt fa-2x"></i>
          <h5><strong>Tipo</strong></h5>
          <span className="mt-2">Workshop</span>
        </div>
        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-calendar-alt fa-2x"></i>
          <h5><strong>Data</strong></h5>
          <span className="mt-2">Data aqui</span>
        </div>
        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-clock fa-2x"></i>
          <h5><strong>Hora</strong></h5>
          <span className="mt-2">Hora aqui</span>
        </div>
      </div>
      <div className="row box-detalhes">
        <h5><strong>Detalhes do evento</strong></h5>
        <p className="text-justify p-3"></p>
      </div>
    </>
  );
}

export default EventoDetalhes;