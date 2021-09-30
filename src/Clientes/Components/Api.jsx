import React from 'react';



export function getProdutos(){
    const produtos =[
        {codigo: 25789, descricao:"CALÇA MOLETON", quantidade: 50, valor: 850.00},
        {codigo: 58796, descricao:"CASACO PRETO", quantidade: 40, valor: 350.00},
        {codigo: 85632, descricao:"BERMUDA TITAN", quantidade: 100, valor: 1500.00},
        {codigo: 79634, descricao:"CAMISETA POLO", quantidade: 23, valor: 650.00},
        {codigo: 78945, descricao:"CASACO FEMININO", quantidade: 40, valor: 2000.00},
        {codigo: 23894, descricao:"TERNO GALBER", quantidade: 42, valor: 380.00},
        {codigo: 96371, descricao:"TENIS NIKE", quantidade: 35, valor: 610.00}, ] 
    return produtos
}


export function deleteProduto(codigo){
    alert(`Cliente Id ${codigo} excluido com sucesso!!`)
}


export function postProduto(payload) {
    let produtos = getProdutos()
    produtos.push(
        {codigo:payload.codigo, 
        descricao: payload.descricao, 
        quantidade:payload.quantidade, 
        valor:payload.valor})
        console.log("__POSTPRODUTO__", produtos)
}

