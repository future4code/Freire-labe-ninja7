import React from 'react';
import styled from 'styled-components'

const DivCard = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto:wght@300&display=swap');

    background-color: rgb(245, 244, 251);
    border-color: hsl(0, 0%, 80%);
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;

    box-shadow: rgb(204 204 204) 2px 2px 15px;
    flex-wrap: wrap;

    justify-content: space-between;
    min-height: 38px;
    outline: 0!important;

    transition: all 100ms;
    box-sizing: border-box;

    text-align: center;
    width: auto;
    height: auto;
    padding: 15px;

    .button-ver-adicionar {

        font-size: 13px;
        margin-left: 10px;
    }

    h2{
        color: #210030;
        font-family: 'Roboto', sans-serif;;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px;
        margin-top: 20px;

    }
    div{
        display: flex;
        justify-content: space-around;
        
    }

    h4 {
        color: #323634;
        font-family: 'Oswald', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }

    .container-botao {
        margin-top: 50px;
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
                
                <div className='container-botao'>
                    <button className='button-ver-adicionar' onClick={()=> {this.props.irParaDetalhes(this.props.servico.id)}}>Ver Detalhes</button>
                    <button className='button-ver-adicionar' onClick={()=>{this.props.adicionaAoCarrinho(this.props.servico)}}>Add ao Carrinho</button>
                </div>

            
            </DivCard>
        )
    }
}