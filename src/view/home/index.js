import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import { toastSucesso, toastErro } from '../../config/toastr';
import EventoCard from '../../components/evento-card';

const Home = () => {

  const [pesquisa, setPesquisa] = useState('');
  const [eventos, setEventos] = useState([]);
  let listaeventos = [];
  const db = firebase.firestore()

  useEffect(() => {
    db.collection('eventos').get().then(async (resultado) => {
      await resultado.docs.forEach(doc => {
        listaeventos.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setEventos(listaeventos);
    });
    toastSucesso('Renderizando...')
  }, [];

  return (
    <>
      <Navbar />
      <div className="row pt-4 mx-3 text-center row-pesquisa">
        
        <input type="text" className="form-control barra-pesquisa" placeholder="Pesquisar evento" />
      </div>
      <div className="row mt-3 mx-2 p-4">
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.imagem} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
      </div>
    </>
  );
}

export default Home;
