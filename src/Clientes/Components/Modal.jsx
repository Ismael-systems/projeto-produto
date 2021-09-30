import './FormatModal.css'
import React, { useState, useEffect }  from 'react';
import logo from '../../Clientes/images/logo.png'


function Modal(props)  {
   const [codigo, setCodigo] = useState("")
   const [descricao, setDescricao] = useState("")
   const [quantidade, setQuantidade] = useState("")
   const [valor, setValor] = useState("")

   const {produto} = props
   const {disabled } = props
   

   useEffect(() => {
      
      setCodigo("")
      setDescricao("")
      setQuantidade("")
      setValor("")


      setCodigo(produto.codigo)
      setDescricao(produto.descricao)
      setQuantidade(produto.quantidade)
      setValor(produto.valor)

   }, [produto])



   function editCodigo (e) {
      const codigo = e.target.value
      if (codigo.length == 0) {
         alert("O Campo Codigo não pode estar vazio !")
         return
      }
      setCodigo(codigo)
   }

   function editDescricao (e) {
      const descricao = e.target.value
      if (descricao.length == 0 ) {
         alert("O Campo Descrição não pode estar vazio !")
         return 
      }
      setDescricao(descricao)
   }

   function editQuantidade (e) {
      const quantidade = e.target.value
      if (quantidade.length == 0 ) {
         alert("O Campo Quantidade não pode estar vazio  !")
         return 
      }
      setQuantidade(quantidade)
   }

   function editValor (e) {
      const valor = e.target.value
      if (valor.length == 0 ) {
         alert("O Campo Valor não pode estar vazio  !")
         return 
      }
      setValor(valor)
   }

   

   function editarDados(){
      return ( 
         <>           
         <div class="form-group"> 
         <input  
         type="number" 
         name="codigo"
         class="form-control"     
         value={codigo}
         placeholder="Informe o Codigo"
         onChange={(e) => editCodigo(e)}
         disabled={disabled}
         />
         </div>
         <br/>

         <div class="form-group">
         <input
         type="text"
         name="descricao"
         class="form-control"
         value={descricao}
         placeholder="Informe a descrição"
         onChange={(e) => editDescricao(e)}
         />
         </div>
         <br/>

         <div class="form-group">
         <input
         type="number"
         name="quantidade"
         class="form-control"
         value={quantidade}
         placeholder="Informe a quantidade"
         onChange={(e) => editQuantidade(e)}
         />
         </div>
         <br/>

         <div className=""> 
         <input
         type="number"
         name="valor"
         class="form-control"
         value={valor}
         placeholder="Informe o valor"
         onChange={(e) => editValor(e)}
         />               
         <br/>
         </div>
         {/* <div className="junbotron">
         <img src={logo} class="img-fluid" alt="Responsive image"/>
         </div> */}       
         </>
      )
   }

   

   function salvarDados() {
      const payload = {
         codigo: produto.codigo,
         descricao,
         quantidade,
         valor
      }
      console.log("__salvarDados__", payload)
   }
   

    return(
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalCenterTitle">PRODUTO:  {produto.descricao}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                  </button>
                 </div>
                <div class="modal-body">
                   {editarDados()}
              </div>
             <div class="modal-footer">
            <button onClick={() => salvarDados() } type="button" class="btn btn-success">Salvar alterações</button>
         <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar alterações</button>
      </div>
    </div>
  </div>
</div>
)}


export default Modal;