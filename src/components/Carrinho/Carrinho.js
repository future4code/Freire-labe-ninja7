import React from 'react';
import styled from 'styled-components';
import CardCarrinho from '../CardCarrinho/CardCarrinho';
import Header from '../Home/header/index'
import Footer from '../Home/footer/index';
import CarrinhoVazio from './img/carrinho-vazio.jpg';

const DadosDoCarrinho = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

div{
    display: flex;
    justify-content: center;
    align-items: center;

    .button-finalizar-voltar{
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 140px;
    }

    @media (max-width: 900px) {

        .button-finalizar-voltar{
            margin-left: 30px;
            margin-bottom: 20px;
            margin-top: 20px;
            font-size: 12px;
    }
    }

}
`
const Mensagem = styled.div`
    text-align: center;

    
h1 {
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

    font-family: 'Source Sans Pro', sans-serif;

    text-align: center;
    padding: 1cm;

    @media (max-width: 900px) {
        padding: 3cm;
    }
}
`


export default class Carrinho extends React.Component {
    render() {
        const componenteDoCarrinho = this.props.carrinho.map((item) => {
            return <CardCarrinho key={item.id} titulo={item.title} preco={item.price} id={item.id} removeCardDoCarrinho={this.props.removeCardDoCarrinho} />
        })
        let precoTotal = 0
        this.props.carrinho.forEach((element) => {
            precoTotal += element.price
        });
        return (
            <div>
            <Header 
                irParaHome={this.props.irParaHome}
                irParaContratarUmNinja={this.props.irParaContratarUmNinja}
                irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
                irParaCarrinho={this.props.irParaCarrinho}
                />

                {componenteDoCarrinho.length > 0 ? (
                     <div>
                     {componenteDoCarrinho}
                     <DadosDoCarrinho>
 
                         <p>Valor Total: R${precoTotal.toFixed(2)} </p>
                         <div>
                             <button className='button-finalizar-voltar' onClick={() => { this.props.limparCarrinho() }}>Finalizar Compra</button>
                             <button className='button-finalizar-voltar' onClick={() => { this.props.irParaContratarUmNinja() }}>Voltar a Lista</button>
                         </div>

                
                     </DadosDoCarrinho>
                    </div>
                ) : (
                    <Mensagem>
                        <h1>Carrinho Vazio</h1>
                        <img src={CarrinhoVazio} width={200}></img>
                    </Mensagem>
                )}
                
                <Footer />
            </div>
        )
    }
}
