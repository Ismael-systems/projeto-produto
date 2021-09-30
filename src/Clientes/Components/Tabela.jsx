import React, { useState } from 'react';
import { deleteProduto } from './Api';
import Modal from './Modal'
import axios from 'axios'   //1
import { FaPen, FaTrash } from "react-icons/fa";
import Visualizador from './Visualizador';
import Pesquisa from './Pesquisa'


export default function Tabela  (props) {
  
  const[modal, setModal] = useState(false)  
  const[produto, setProduto] = useState([])

  const{dados} = props
  
  function showModal(i){
    const produto = dados.find(x => x.codigo === i)
    setProduto(produto)
    setModal(true)        
  } 
 

  function visualizador (i){
    const visualiza = dados.find(x => x.codigo === i)
    setProduto(visualiza)        
  } 

  function hendleLista(){
    console.log("__HENDLELISTA__", produto)
    return(
      <>
      <br/>
      <Pesquisa />

      <table class="table table-hover table-bordered ">
        <thead class="thead-dark">  
        <tr>
        <th scope="col">CODIGO</th>
        <th scope="col">DESCRIÇÃO</th>
        <th scope="col">QUANTIDADE</th>
        <th scope="col">VALOR R$</th>
        <th scope="col">AÇÕES</th>
        </tr> 
        </thead>
        <tbody>        
        {dados.map((e,i) => (
        <tr>
        <td width="130" onClick={() => visualizador(e.codigo)}> {e.codigo} </td>
        <td>{e.descricao}</td>
        <td>{e.quantidade}</td>
        <td>{e.valor.toLocaleString()}</td>  

        <td width="130">
        <button 
        onClick={() => showModal(e.codigo)}
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        >
        <FaPen size="18" />
        </button>{" "}
        {modal ? <Modal produto={produto} disabled="disabled" /> : null}
   
        
        <button onClick={() => deleteProduto(e.codigo)} type="button" class="btn btn-danger"><FaTrash size="18"/></button>
        </td>
        </tr>
        ))}
        </tbody>
        </table>
        <div align="left">
          <Visualizador produto={produto}/>
        </div>
        
        </>)    
 }

 return(
  <>
    { dados.length ? hendleLista() : <div>DESCULPE !! NÃO HA DADOS PARA MOSTRAR !!</div>}
  </>
  )
}