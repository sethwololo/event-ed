import React, { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../../components/navbar/';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import EventoCard from '../../components/evento-card';

const Home = ({ match }) => {

  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState('Todos');
  const usuarioEmail = useSelector(state => state.usuarioEmail);
  console.log(usuarioEmail);

  useEffect(() => {
    let unsubscribe;
    if (match.params.parametro) {
      unsubscribe = firebase
        .firestore()
        .collection('eventos')
        .where('usuario', '==', usuarioEmail)
        .onSnapshot(snapshot => {
          const listaDeEventos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          setEventos(listaDeEventos);
        });
      return () => unsubscribe();
    } else {
      if (pesquisa === 'Todos') {
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
      } else {
        unsubscribe = firebase
          .firestore()
          .collection('eventos')
          .where('tipo', '==', pesquisa)
          .onSnapshot(snapshot => {
            const listaDeEventos = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
            setEventos(listaDeEventos);
          });
        return () => unsubscribe();
      }
    }

  }, [pesquisa]);


  console.log(eventos)



  return (
    <>
      <Navbar />
      <div className="row p-4 mx-3 text-center row-pesquisa">
        <h1 className="mx-auto font-weight-black">Eventos</h1>
        <select onChange={e => setPesquisa(e.target.value)} className="form-control barra-pesquisa">
          <option>Todos</option>
          <option>Palestra</option>
          <option>Workshop</option>
          <option>Conferência</option>
        </select>
      </div>
      <div className="row mt-3 mx-2 p-4">
        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.imagem} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
      </div>
    </>
  );
}

export default Home;
