import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-card.css';
import firebase from '../../config/firebase';
import { toastAviso, toastSucesso } from '../../config/toastr';

const EventoCard = ({ id, img, titulo, detalhes, visualizacoes }) => {
  const [urlImagem, setUrlImagem] = useState();
  useEffect(() => {
    firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => { setUrlImagem(url) });
  }, [urlImagem]);

  return (
    <div className="col-md-3 col-sm-12 mb-5">
      <img id="banner-evento" src={urlImagem} className="card-img-top img-card" alt="Imagem do evento" />
      <div className="card-body">
        <div className="row card-top">
          <div className="col-9">
            <h4 className="font-weight-bold">{titulo}</h4>
          </div>
          <div className="col-3 text-right">
            <i className="fas fa-eye"></i> <span>{visualizacoes}</span>
          </div>
        </div>
        <p className="card-text text-justify">{detalhes}</p>

        
      </div>
      <div className="rodape-card p-3">
          <Link to={`/eventodetalhes/${id}`} className="btn btn-block btn-detalhes">Visualizar evento</Link>
        </div>
    </div>
  );
}

export default EventoCard;
