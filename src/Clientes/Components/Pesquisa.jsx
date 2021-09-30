import React,{useState} from 'react';
import ModalInsert  from './ModalInsert';
import { FaCartPlus } from "react-icons/fa";
import logotipo from '../images/logotipo.png'

export default function Pesquisa(){

  const[modal, setModal] = useState(false) 
  
  function teste(objeto){
    console.log("__TESTE__",objeto)
  }
  
  function showModalInsert(){
    setModal(true)        
  }

    return(
      <div>
      <div className="jumbotron">
      <h1 align="left"> <img src={logotipo}/> </h1>
      </div>

      <div className="flex-container">
        <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisa..." aria-label="Search"/>
        <button class="btn btn-info" type="submit">Pesquisar</button>         
        </form>
        <div>

        <button 
        onClick={() => showModalInsert()}
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#modalinsert"
        >
        <FaCartPlus size="18" /> NOVO
        </button>{" "}
        {modal ? <ModalInsert onChange={(o) => teste(o)} /> : null}
        
        </div> 

        </nav>               
        </div>
        </div>)
}

