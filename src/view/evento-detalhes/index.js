import React, { useState, useEffect } from 'react';
import './evento-detalhes.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';

//import { toastSucesso, toastErro } from '../../config/toastr';

const testepdf = () => console.log('botao');


const EventoDetalhes = (props) => {

  const [evento, setEvento] = useState({});
  const [urlImg, setUrlImg] = useState();


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
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid fundo-detalhes">
        <div className="row">
          <img src={urlImg} className="img-banner" alt="banner" />
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
          <button className="col-md-2 col-sm-12 btn-pdf p-3 my-2" onClick={testepdf} >
            <i className="fas fa-ticket-alt fa-3x"></i>
            <h4 className="my-auto"><strong>Gerar ingresso</strong></h4>
          </button>
        </div>
        <div className="mx-auto p-4">
          <div className="container box-detalhes p-5">
            <h1 className="mx-auto text-center"><strong>{evento.titulo}</strong></h1>
            <p className="text-justify p-3">{evento.detalhes}</p>
          </div>
        </div>
      </div>
      <Link to='' className="btn-editar"><i className="fas fa-pen-square fa-3x" /></Link>
    </>
  );
}

export default EventoDetalhes;