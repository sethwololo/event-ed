/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import { toastSucesso, toastErro } from '../../config/toastr';
import EventoCard from '../../components/evento-card';

const Home = () => {

  const [eventos, setEventos] = useState([]);
  let listaEventos = [];

  useEffect(() => {
    firebase.firestore().collection('eventos').get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        listaEventos.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setEventos(listaEventos);
    })
  });

  return (
    <>
      <Navbar />
      <h1>{useSelector(state => state.usuarioEmail)}</h1>
      <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
      <div className="row">
        {eventos.map(item => <EventoCard key={item.id} img={item.foto} titulo={item.titulo} descricao={item.descricao} visualizacoes={item.visualizacoes} />)}
      </div>


    </>
  );
}

export default Home;
