import React, { useState, useEffect } from 'react';
import './evento-detalhes.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';

//import { toastSucesso, toastErro } from '../../config/toastr';


const EventoDetalhes = (props) => {

  const [evento, setEvento] = useState({});
  const [urlImg, setUrlImg] = useState();
  const usuarioLogado = useSelector(state => state.usuarioEmail);


  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('eventos')
      .doc(props.match.params.id)
      .onSnapshot(snapshot => {
        setEvento(snapshot.data());
        firebase.storage().ref(`imagens/${snapshot.data().imagem}`).getDownloadURL().then(url => setUrlImg(url));
      });
    return () => unsubscribe();
  }, [props.match.params.id]);

  const gerarIngresso = () => {
    firebase.firestore().collection('eventos').doc(props.match.params.id).update('visualizacoes', evento.visualizacoes + 1)
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid fundo-detalhes">
        <div className="row box-img">
          <img src={urlImg} className="img-banner" alt="banner" />
          <div className="views">
            <i className="fas fa-user"></i><span>  {evento.visualizacoes}</span>
          </div>
        </div>
        <div className="row d-flex justify-content-around barra-dados">
          <div className="col-md-2 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-list-ul fa-2x"></i>
            <h5 className="mt-2"><strong>Tipo</strong></h5>
            <span className="mt-2">{evento.tipo}</span>
          </div>
          <div className="col-md-2 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5 className="mt-2"><strong>Data</strong></h5>
            <span className="mt-2">{evento.data}</span>
          </div>
          <div className="col-md-2 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5 className="mt-2"><strong>Hora</strong></h5>
            <span className="mt-2">{evento.hora}</span>
          </div>
          <button className="col-md-2 col-sm-12 btn-pdf p-3 my-2" onClick={gerarIngresso} >
            <i className="fas fa-ticket-alt fa-3x"></i>
            <h4 className="my-auto"><strong>Gerar ingresso</strong></h4>
          </button>
        </div>
        <div className="mx-auto p-4">
          <div className="container box-detalhes p-5">
            <h1 className="mx-auto text-center mb-5"><strong>{evento.titulo}</strong></h1>
            <p className="text-justify texto-detalhes">{evento.detalhes}</p>
          </div>
        </div>
      </div>
      {
        usuarioLogado === evento.usuario ? <Link to={`/editarevento/${props.match.params.id}`} className="btn-editar"><i className="fas fa-pen-square fa-3x" /></Link> : ''
      }
    </>
  );
}

export default EventoDetalhes;