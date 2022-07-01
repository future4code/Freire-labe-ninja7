import React from 'react';
import styled from 'styled-components';

const DivCardCarrinho = styled.div`


    color: #5c5b5a;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;

    flex-wrap: wrap;

    justify-content: space-between;
    min-height: 38px;
    outline: 0!important;
    
    transition: all 100ms;
    box-sizing: border-box;



width: 60vw;
margin: 20px;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;


`
 const Div = styled.div`
 display: flex;
 justify-content: center;

 `

export default class CardCarrinho extends React.Component {
    render() {
        return (
            <Div>
                <DivCardCarrinho>
                    <h3>{this.props.titulo}</h3>
                    <p>R$ {this.props.preco},00</p>
                    <button onClick={()=> {this.props.removeCardDoCarrinho(this.props.id)}}>Remover</button>
                </DivCardCarrinho>
            </Div>

        )
    }
}