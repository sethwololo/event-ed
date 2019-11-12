import React, { useState } from 'react';
import './evento-cadastro.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { toastSucesso, toastErro } from '../../config/toastr';


const EventoCadastro = () => {

  const [ titulo, setTitulo ] = useState();
  const [ tipo, setTipo ] = useState();
  const [ descricao, setDescricao ] = useState();
  const [ data, setData ] = useState();
  const [ hora, setHora ] = useState();
  const [ imagem, setImagem ] = useState();
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  const storage = firebase.storage();
  const db = firebase.firestore();

  

  const cadastrar = async () => {
    try {
      await storage.ref(`imagens/${imagem.name}`).put(imagem);
      await db.collection('eventos').add({
        titulo: titulo,
        tipo: tipo,
        detalhes: descricao,
        data: data,
        hora: hora,
        usuario: usuarioEmail,
        visualizacoes: 0,
        imagem: imagem.name,
        publico: 1,
        criacao: new Date()
      });
      await toastSucesso('Evento cadastrado com sucesso!');
    } catch (error) {
      toastErro('Não foi possível cadastrar o evento!');
    }
  }
  
  return (
    <>
      <Navbar />
      <div className="col-12">
        <div className="row mt-4">
          <h3 className="mx-auto font-weight-bold">Novo evento</h3>
        </div>
        <form>
          <div className="form-group">
            <label>Título</label>
            <input onChange={e => setTitulo(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Tipo</label>
            <select onChange={e => setTipo(e.target.value)} className="form-control">
              <option disabled selected>Selecione</option>
              <option>Palestra</option>
              <option>Workshop</option>
              <option>Conferência</option>
            </select>
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea onChange={(e) => setDescricao(e.target.value)} className="form-control" rows="3" />
          </div>
          <div className="form-group row">
            <div className="col-6">
              <label>Data</label>
              <input onChange={e => setData(e.target.value)} type="date" className="form-control" />
            </div>
            <div className="col-6">
              <label>Hora</label>
              <input onChange={e => setHora(e.target.value)} type="time" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label>Imagem</label>
            <input onChange={e => setImagem(e.target.files[0])}type="file" className="form-control" />
          </div>
          <button onClick={cadastrar} className="btn btn-lg btn-block btn-criar-evento my-4" type="button">Publicar evento</button>
        </form>
      </div>
    </>
  );
}

export default EventoCadastro;
