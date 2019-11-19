import React, { useState, useEffect } from 'react';
import './home.css';
//import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
//import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
//import { toastSucesso, toastErro } from '../../config/toastr';
import EventoCard from '../../components/evento-card';

const Home = ({ match }) => {

  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  //let listaeventos = [];

  /*useEffect(() => {
    setPesquisa('');
    if (match.params.parametro) {
      alert("MEUS EVENTOS")
    } else {
      buscarNoBanco.onSnapshot(resultado => {
        resultado.docs.forEach(doc => {
          if (doc.data().titulo.indexOf(pesquisa) >= 0) listaeventos.push({ id: doc.id, ...doc.data() });
        });
        setEventos(listaeventos);
        listaeventos = []
      });
    }
  }, [pesquisa]);*/

  useEffect(() => {
    let unsubscribe;
    if (match.params.parametro) {
      alert("MEUS EVENTOS")
    } else {
      unsubscribe = firebase
        .firestore()
        .collection('eventos')
        .onSnapshot(snapshot => {
          const listaDeEventos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setEventos(listaDeEventos);
        });
      return () => unsubscribe();
    }

  }, []);


  console.log(eventos)



  return (
    <>
      <Navbar />
      <div className="row p-4 mx-3 text-center row-pesquisa">
        <h1 className="mx-auto font-weight-black">Eventos</h1>
        <input onChange={e => setPesquisa(e.target.value)} type="text" className="form-control barra-pesquisa" placeholder="Pesquisar evento" />
      </div>
      <div className="row mt-3 mx-2 p-4">
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.imagem} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
      </div>
    </>
  );
}

export default Home;
