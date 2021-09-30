import React from 'react';
import Tabela from './Components/Tabela';

import { getProdutos } from './Components/Api';
import cliente from '../Clientes/images/cliente.jpg'

export default function produtos() {
 const produtos = getProdutos()
 
  return(
    <div className="container">
       <Tabela dados = {produtos}/>
        
    </div>
    )
}  

//<img src={cliente} class="img-fluid" alt="Responsive image"/>     