import React, { useState } from 'react';
import './evento-detalhes.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
//import { toastSucesso, toastErro } from '../../config/toastr';

const testepdf = () => console.log('botao');


const EventoDetalhes = () => {


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <img src="https://via.placeholder.com/1280x720" className="img-banner" alt="banner" />
        </div>
      </div>
      <div className="row d-flex justify-content-around">
        <div className="col-md-2 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-ticket-alt fa-2x"></i>
          <h5 className="mt-1"><strong>Tipo</strong></h5>
          <span className="mt-2">Workshop</span>
        </div>
        <div className="col-md-2 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-calendar-alt fa-2x"></i>
          <h5 className="mt-1"><strong>Data</strong></h5>
          <span className="mt-2">Data aqui</span>
        </div>
        <div className="col-md-2 col-sm-12 box-info p-3 my-2">
          <i className="fas fa-clock fa-2x"></i>
          <h5 className="mt-1"><strong>Hora</strong></h5>
          <span className="mt-2">Hora aqui</span>
        </div>
        <button className="col-md-2 col-sm-12 btn-pdf p-3 my-2" onClick={testepdf} >
          <i className="fas fa-ticket-alt fa-3x"></i>
          <h4 className="my-auto"><strong>Gerar ingresso</strong></h4>
        </button>
      </div>
      <div className="row box-detalhes mt-5 mx-auto">
        <h3 className="mx-auto"><strong>Detalhes do evento</strong></h3>
        <p className="text-justify p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a risus varius, eleifend orci non, euismod odio. Nullam a mi sed nisl hendrerit viverra vel id enim. Cras lobortis cursus placerat. In hac habitasse platea dictumst. Quisque venenatis sollicitudin iaculis. Etiam et nunc efficitur, accumsan nisl eu, posuere sem. Quisque sodales leo quis ex efficitur rhoncus.</p>
      </div>
    </>
  );
}

export default EventoDetalhes;