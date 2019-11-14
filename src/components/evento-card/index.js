import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-card.css';

const EventoCard = () => {
  return (
    <div className="col-md-3 col-sm-12">
      <img id="banner-evento" src="" className="card-img-top img-card" />
      <div className="card-body">
        <h5>Título do Evento</h5>
        <p className="card-text text-justify">
          Detalhes do evento
        </p>
        <div className="row rodape-card d-flex align-items-center">
          <div className="col-6">
            <Link to="/" className="btn btn-sm btn-detalhes">Visualizar evento</Link>
          </div>
          <div className="col-6 text-right">
            <i className="fas fa-eye"></i><span>1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoCard;
