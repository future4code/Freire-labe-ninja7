import React from 'react';
import styled from 'styled-components';

const DivCardCarrinho = styled.div`


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

    width: 60vw;
    margin: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        
        p , h3 {

            margin-bottom: 20px;
        
        }

        display: grid;
        padding: 20px;

        .button-remover-carrinho {
            font-size: 12px;
        }
        
    }


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
                    <button className='button-remover-carrinho' onClick={()=> {this.props.removeCardDoCarrinho(this.props.id)}}>Remover</button>
                </DivCardCarrinho>
            </Div>

        )
    }
}