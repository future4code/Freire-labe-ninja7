import React from 'react';
import styled from 'styled-components'

const DivCard = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Roboto:wght@300&display=swap');

    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 60%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;

    -webkit-box-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-height: 38px;
    outline: 0!important;
    -webkit-transition: all 100ms;
    transition: all 100ms;
    box-sizing: border-box;


width: 20vw;
height: 15vw;
padding: 15px;


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
                    <button onClick={()=> {this.props.irParaDetalhes(this.props.servico.id)}}>Ver Detalhes</button>
                    <button onClick={()=>{this.props.adicionaAoCarrinho(this.props.servico)}}>Add ao Carrinho</button>
                </div>

            
            </DivCard>
        )
    }
}