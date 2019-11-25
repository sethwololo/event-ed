import React, { useState, useEffect } from 'react';
import './evento-detalhes.css';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import firebase from '../../config/firebase';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';

//import { toastSucesso, toastErro } from '../../config/toastr';


const EventoDetalhes = (props) => {

  const [evento, setEvento] = useState({});
  const [urlImg, setUrlImg] = useState();
  const usuarioEmail = useSelector(state => state.usuarioEmail);
  const usuarioLogado = useSelector(state => state.usuarioLogado);
  const [carregando, setCarregando] = useState(1);
  const [excluido, setExcluido] = useState(0);

  const remover = () => {
    firebase.firestore().collection('eventos').doc(props.match.params.id).delete().then(() => {
      console.log('excluido')
      setExcluido(1);
    })
  }

  const gerarIngresso = () => {
    
  }

  useEffect(() => {
    if (carregando === 1) {
      const unsubscribe = firebase
        .firestore()
        .collection('eventos')
        .doc(props.match.params.id)
        .onSnapshot(snapshot => {
          setEvento(snapshot.data());
          setCarregando(0);
        });
      return () => unsubscribe();
    } else {
      firebase.storage().ref(`imagens/${evento.imagem}`).getDownloadURL().then(url => setUrlImg(url));
    }
  }, [carregando, evento.imagem, props.match.params.id]);

  console.log(evento.imagem)
  console.log(excluido)

  const gerarPdf = () => {
    const qrcode = 'data:image/png;base64,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'
    let ingresso = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [180, 580]
    });
    ingresso.setFontSize(24)
    ingresso.text(20, 20, evento.titulo)

    ingresso.setFontSize(16)
    ingresso.text(20, 30, `Inscrição de ${usuarioEmail} confirmada!`)

    ingresso.setFontSize(8)
    ingresso.text(103, 40, `ID: ${props.match.params.id}`)

    ingresso.addImage(qrcode, 'PNG', 145, 7, 50, 50)

    ingresso.save(`Ingresso-${evento.titulo}.pdf`)

    firebase.firestore().collection('eventos').doc(props.match.params.id).update('visualizacoes', evento.visualizacoes + 1)
  }


  return (
    <>
      {excluido ? <Redirect to="/" /> : null}
      <Navbar />
      <div className="container-fluid fundo-detalhes">
        {
          carregando ? <div className="row mt-5"> <div class="spinner-border text-white mx-auto" role="status"><span class="sr-only"></span></div> </div>
            :
            <>
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
                {
                  usuarioLogado ?
                    usuarioEmail === evento.usuario ?
                      <button onClick={remover} className="col-md-2 col-sm-12 btn-pdf p-3 my-2">
                        <i className="fas fa-window-close fa-3x"></i>
                        <h4 className="my-auto"><strong>Excluir evento</strong></h4>
                      </button>
                      :
                      <button className="col-md-2 col-sm-12 btn-pdf p-3 my-2" onClick={gerarPdf} >
                        <i className="fas fa-ticket-alt fa-3x"></i>
                        <h4 className="my-auto"><strong>Gerar ingresso</strong></h4>
                      </button>
                    : null
                }
              </div>
              <div className="mx-auto p-4">
                <div className="container box-detalhes p-5">
                  <h1 className="mx-auto text-center mb-5"><strong>{evento.titulo}</strong></h1>
                  <p className="text-justify texto-detalhes">{evento.detalhes}</p>
                </div>
                {
                  usuarioEmail === evento.usuario ? <Link to={`/editarevento/${props.match.params.id}`} className="btn-editar"><i className="fas fa-pen-square fa-3x" /></Link> : ''
                }
              </div>
            </>
        }
      </div>
    </>
  );
}

export default EventoDetalhes;