import React,{useState} from 'react';
import { FaCartPlus } from "react-icons/fa";
import Modal from  './Modal'

export default function Botoes(){
    
    const[modal,setModal] = useState(false)
    const[produto,setProduto] = useState([])
    
    function showModal(){
            const produto = [
            {codigo: "", descricao: "", quantidade: 0, valor: 0}
        ]
        setProduto(produto)
        setModal(true)        
      } 

    return(
    <>
        <button 
        onClick={() => showModal()}
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        >
        <FaCartPlus size="18" /> NOVO
        </button>{" "}
        {modal ? <Modal produto={produto}/> : null}
    </>)
}

