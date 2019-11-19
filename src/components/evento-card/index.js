import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './evento-card.css';
import firebase from '../../config/firebase';
import { toastAviso, toastSucesso } from '../../config/toastr';

const EventoCard = ({id, img, titulo, detalhes, visualizacoes}) => {
  const [urlImagem, setUrlImagem] = useState();
  useEffect(() => {
    firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => {setUrlImagem(url) ; toastSucesso("renderImagem")}).catch(e => toastAviso('Erro ao carregar imagens dos eventos'));
  }, [urlImagem]);

  return (
    <div className="col-md-3 col-sm-12">
      <img id="banner-evento" src={urlImagem} className="card-img-top img-card" alt="Imagem do evento"/>
      <div className="card-body">
        <h5>{titulo}</h5>
        <p className="card-text text-justify">
          {detalhes}
        </p>
        <div className="row rodape-card d-flex align-items-center">
          <div className="col-6">
            <Link to={`/eventodetalhes/${id}`} className="btn btn-sm btn-detalhes">Visualizar evento</Link>
          </div>
          <div className="col-6 text-right">
            <i className="fas fa-eye"></i><span>{visualizacoes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoCard;
