import React from 'react';
import styled from 'styled-components'

const DivCard = styled.div`

display: flex;
flex-direction: column;
border: solid black 1px;
width: 20vw;
height: 20vw;
padding: 15px;
background-color: #edf0f1;
border-radius: 8px;

h2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;
    
}
div{
    display: flex;
    justify-content: space-around;
    
}
`

export default class Card extends React.Component{
     convertDate = (prazo) => {
        const dia = prazo.substring(8, 10)
        const mes = prazo.substring(5, 7)
        const ano = prazo.substring(0, 4)
        return `${dia}/${mes}/${ano}`
    }
    
    render(){
        return(

            <DivCard>
                <h2>{this.props.titulo}</h2>
                <h4>Preço: R$ {this.props.preco},00 </h4>
                <h4>Prazo:{this.convertDate(this.props.prazo)} </h4>
                <div>
                    <button onClick={()=> {this.props.irParaDetalhes(this.props.servico.id)}}>Ver Detalhes</button>
                    <button onClick={()=>{this.props.adicionaAoCarrinho(this.props.servico)}}>Add ao Carrinho</button>
                </div>
            </DivCard>
        )
    }
}