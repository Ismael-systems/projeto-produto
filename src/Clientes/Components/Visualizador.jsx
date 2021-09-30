import React,{useState,useEffect} from 'react';
import { FaTasks } from "react-icons/fa";

export default function Visualizador(props){
       

  const[codigo, setCodigo] = useState ("")
  const[descricao, setDescricao] = useState ("")
  const[quantidade, setQuantidade] = useState ("")
  const[valor, setValor] = useState ("")

  const {produto} = props 

    useEffect(() => {
    setCodigo(produto.codigo)
    setDescricao(produto.descricao)
    setQuantidade(produto.quantidade)
    setValor(produto.valor)

    }, [produto])

    function hendleLista(){
      return(
     <div className="flex-container">
      <table class="table table-hover table-bordered ">
        <thead class="thead-light">
             <tr>
                 <th>CODIGO</th>
                 <th>DESCRIÇÃO</th>
                 <th>QUANTIDADE</th>
                 <th>VALOR</th>
             </tr>        
        </thead>
         <tbody>
             <tr>
                 <td>{codigo}</td>
                 <td>{descricao}</td>
                 <td>{quantidade}</td>
                 <td>{valor}</td>
             </tr>
         </tbody>
     </table>   
     <div>
  
     </div>    
     </div>)
    }
    return(
        <>
          { produto.codigo ? hendleLista() : <div class="alert alert-info" role="alert"><FaTasks size="26" />{"  "}CLIQUE NO CODIGO ACIMA PARA TER AS INFORMAÇÕES !!</div>}
        </>
        )
    }

    