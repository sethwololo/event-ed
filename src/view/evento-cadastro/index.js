import React, { useState, useEffect } from 'react';
import './evento-cadastro.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { toastSucesso, toastErro } from '../../config/toastr';


const EventoCadastro = (props) => {
  const [loading, setLoading] = useState()
  const [titulo, setTitulo] = useState();
  const [tipo, setTipo] = useState();
  const [detalhes, setDetalhes] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();
  const [imagemAtual, setImagemAtual] = useState();
  const [imagemNova, setImagemNova] = useState();
  const usuarioEmail = useSelector(state => state.usuarioEmail);

  const storage = firebase.storage();
  const db = firebase.firestore();

  useEffect(() => {
    if (props.match.params.id) {
      const unsubscribe = firebase
        .firestore()
        .collection('eventos')
        .doc(props.match.params.id)
        .onSnapshot(snapshot => {
          setTitulo(snapshot.data().titulo);
          setTipo(snapshot.data().tipo);
          setDetalhes(snapshot.data().detalhes);
          setData(snapshot.data().data);
          setHora(snapshot.data().hora);
          setImagemAtual(snapshot.data().imagem)
        });
      return () => unsubscribe();
    }
  }, []);
  console.log(imagemAtual);
  console.log(imagemNova);

  const atualizar = async () => {
    setLoading(true);
    try {
      if (imagemNova) storage.ref(`imagens/${imagemNova.name}`).put(imagemNova);
      await db.collection('eventos').doc(props.match.params.id).update({
        titulo: titulo,
        tipo: tipo,
        detalhes: detalhes,
        data: data,
        hora: hora,
        imagem: imagemNova ? imagemNova.name : imagemAtual
      });
      toastSucesso('Evento atualizado com sucesso!');
      setLoading(false);
    } catch (error) {
      toastErro('Não foi possível atualizar o evento!' + error);
      setLoading(false);
    }
  }


  const cadastrar = async () => {
    setLoading(true);
    try {
      await storage.ref(`imagens/${imagemNova.name}`).put(imagemNova);
      await db.collection('eventos').add({
        titulo: titulo,
        tipo: tipo,
        detalhes: detalhes,
        data: data,
        hora: hora,
        usuario: usuarioEmail,
        visualizacoes: 0,
        imagem: imagemNova.name,
        publico: 1,
        criacao: new Date()
      });
      await toastSucesso('Evento cadastrado com sucesso!');
      await setLoading(false);
    } catch (error) {
      toastErro('Não foi possível cadastrar o evento!');
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="fundo">
        <div className="cadastro-evento">
          <div className="row mt-4">
            <h1 className="mx-auto font-weight-bold mt-5">{props.match.params.id ? 'Editar evento' : 'Cadastrar evento'}</h1>
          </div>
          <div className="container-formulario">
            <form>
              <div className="form-group">
                <label>Título</label>
                <input onChange={e => setTitulo(e.target.value)} type="text" className="form-control" value={titulo && titulo} />
              </div>
              <div className="form-group">
                <label>Tipo</label>
                <select onChange={e => setTipo(e.target.value)} className="form-control" value={tipo && tipo}>
                  <option disabled selected>Selecione</option>
                  <option>Palestra</option>
                  <option>Workshop</option>
                  <option>Conferência</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descrição</label>
                <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control caixa-texto" rows="3" value={detalhes && detalhes} />
              </div>
              <div className="form-group row">
                <div className="col-6">
                  <label>Data</label>
                  <input onChange={e => setData(e.target.value)} type="date" className="form-control" value={data && data} />
                </div>
                <div className="col-6">
                  <label>Hora</label>
                  <input onChange={e => setHora(e.target.value)} type="time" className="form-control" value={hora && hora} />
                </div>
              </div>
              <div className="form-group">
                <label for="file">Imagem</label>
                <input onChange={e => setImagemNova(e.target.files[0])} type="file" name="upload" id="upload" className="form-control" accept="image/png, image/jpeg, image/jpg, image/bmp, image/webp, image/gif" />
              </div>

              <div className="row">
                {
                  loading === true ?
                    <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Carregando...</span></div>
                    :
                    <button onClick={props.match.params.id ? atualizar : cadastrar} className="btn btn-lg btn-block btn-criar-evento my-4" type="button">{props.match.params.id ? 'Atualizar evento' : 'Publicar evento'}</button>
                }
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;
