import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-card.css';
import firebase from '../../config/firebase';

const EventoCard = ({ id, img, titulo, detalhes, visualizacoes }) => {
  const [urlImagem, setUrlImagem] = useState();
  useEffect(() => {
    firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => { setUrlImagem(url) });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlImagem]);

  return (
    <div className="col-lg-3 col-md-4 col-sm-12  mb-5 tudo-card">
      <img id="banner-evento" src={urlImagem} className="card-img-top img-card" alt="Imagem do evento" />
      <div className="card-body">
        <div className="row card-top">
          <div className="col-9">
            <h5 className="font-weight-bold titulo-card">{titulo}</h5>
          </div>
          <div className="col-3 text-right">
            <i className="fas fa-user mr-2"></i><span><strong>{visualizacoes}</strong></span>
          </div>
        </div>
        <p className="card-text text-justify">{detalhes}</p>
      </div>
      <div className="rodape-card">
        <div className="container">
          <Link to={`/eventodetalhes/${id}`} className="btn btn-block btn-detalhes">Visualizar evento</Link>
        </div>
      </div>
    </div>
  );
}

export default EventoCard;
