import React,{ useState } from 'react';
import { postProduto } from './Api';
import './FormatModal.css'

export default function ModalInsert(props){

    const [codigo, setCodigo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [valor, setValor] = useState("")
 //----------------------------------------------------
    function insertProduto(){
          const payload = {
                codigo: codigo,
                descricao: descricao,
                quantidade: quantidade,
                valor: valor
          }
          const resp = postProduto(payload)
          props.onChange(resp)
    }
//----------------------------------------------------

    function formInserir(){
         return (
         <>
         <div className="form-group"> 
         <input  
         className="form-control"     
         type="number" 
         name="codigo"
         value={codigo}
         placeholder="Informe o Codigo :"
         onChange={(e) => setCodigo(e.target.value)}
         />
         </div>
         <br/>

         <div class="form-group">
         <input
         type="text"
         name="descricao"
         className="form-control" 
         value={descricao}
         placeholder="Informe a descrição :"
         onChange={(e) => setDescricao(e.target.value)}
         />
         </div>
         <br/>

         <div class="form-group">                  
         <input
         type="number"
         name="quantidade"
         className="form-control"
         value={quantidade}
         placeholder="Informe a Quantidade :"
         onChange={(e) => setQuantidade(e.target.value)}
         />
         </div>
         <br/>
         
         <div class="form-group">
         <input
         type="number"
         name="valor"
         className="form-control"
         value={valor}
         placeholder="Informe o Valor :"
         onChange={(e) => setValor(e.target.value)}
         />                 
         <br/>  
         </div>       
         </> 
      )
     }

    
      return(
         <div class="modal fade" id="modalinsert" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
         <div class="modal-header">
         <h5 class="modal-title" id="exampleModalCenterTitle">CADASTRO DE PRODUTOS:</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
         </button>
         </div>
         <div class="modal-body">
               {formInserir()}
         </div>
         <div class="modal-footer">
         <button onClick={()=> insertProduto()} type="button" class="btn btn-success">Cadastrar produto</button>
         <button type="button" class="btn btn-danger" data-dismiss="modal">Sair</button>
         </div>
         </div>
         </div>
         </div>
      )

}