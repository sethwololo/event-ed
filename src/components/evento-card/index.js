import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../img/icone-evented.svg';
import './evento-card.css';

const EventoCard = (key, img, titulo, descricao, visualizacoes) => {
  return (
    <div className="col-md-3 col-sm-12 corpo-card" >
      <img id="banner-evento" src="https://via.placeholder.com/1280x720" className="card-img-top img-card" alt="Imagem do evento" />
      <div className="card-body">
        <div className="row card-top">
          <div className="col-9 text-left">
            <h4 className="font-weight-bold">{titulo}</h4>
          </div>
          <div className="col-3 text-left">
            <i class="fas fa-eye"></i><span class="font-weight-bold"> 1123</span>
          </div>
        </div>
        <p className="card-text text-justify">
          {descricao}
        </p>
        <div className="rodape-card d-flex align-items-center my-4">
          <Link to="/" className="btn btn-sm btn-block btn-detalhes ">Detalhes</Link>
        </div>
      </div>
    </div>
  );
}

export default EventoCard;
