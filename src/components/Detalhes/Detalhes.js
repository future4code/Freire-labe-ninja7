import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Footer from '../Home/footer/index.js';
import Header from '../Home/header/index.js';

const Detalhesconteiner = styled.div`

    background-color: rgb(245, 244, 251);
    border-color: hsl(0, 0%, 80%);
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;

    box-shadow: rgb(204 204 204) 2px 2px 15px;
    flex-wrap: wrap;

    justify-content: space-between;
    outline: 0!important;

    transition: all 100ms;
    box-sizing: border-box;


    display: flex;
    flex-direction: column;
    width: 400px;
    height: auto;

    h4  {
        margin-left: 20px;
    }

    p {
        padding-left: 25px;
        margin: 5px;
    }

    h2 {

        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
        font-family: 'Source Sans Pro', sans-serif;
    }

    h2, li {

        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        margin-top: 20px;
        
    }

    li {
        font-weight: 900;
        color: #171dd4;
    }
    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 0px;
    }

    .descricao{
        margin-top: 20px;

    }

    .button-voltar-lista{

        
        width: 200px;
        margin-bottom: 20px;
        margin-left: 100px;

    }
`

const TelaDeDetalhes = styled.div`

padding: 25px 10px;
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 30px;

`

export default class Detalhes extends React.Component{
    state = {
        servico:{}
    }
    componentDidMount(){
        this.pegaServico()
    }
    pegaServico = () =>{
        const url = "https://labeninjas.herokuapp.com/jobs/"
        Axios.get(`${url}${this.props.servicoId}`,{
            headers:{
                Authorization: '7d95ba58-9060-4f89-9805-67c14d11e93d'
            }
        }).then((res)=>{
            this.setState({servico:res.data})
            console.log(this.state.servico)

        }).catch((err)=>{
            alert(err)
        })
    }
    convertDate = (prazo) => {
        const dia = prazo.substring(8, 10)
        const mes = prazo.substring(5, 7)
        const ano = prazo.substring(0, 4)
        return `${dia}/${mes}/${ano}`
    }
    render(){
        const listaDeFormasDePagamento = this.state.servico.paymentMethods && this.state.servico.paymentMethods.map((formaDoPagamento)=>{
            return <li key={formaDoPagamento}>{formaDoPagamento}</li>
        })
        return (
            <div> 
            <Header 
                irParaHome={this.props.irParaHome}
                irParaContratarUmNinja={this.props.irParaContratarUmNinja}
                irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
                irParaCarrinho={this.props.irParaCarrinho}/>
            <div> 
                
            <TelaDeDetalhes>
                
            <Detalhesconteiner>
  
              <h2>{this.state.servico.title}</h2>
              
            <div className='descricao'> 
              <h4>Preço: R$ {this.state.servico.price},00</h4>
              { this.state.servico.dueDate && <h4>Prazo: {this.convertDate(this.state.servico.dueDate)}</h4>}
              <p>{this.state.servico.description}</p>
              <h4>Formas de Pagamento:</h4>
              <div>{listaDeFormasDePagamento}</div>
            </div>

              <button className='button-voltar-lista' onClick={this.props.irParaContratarUmNinja}> Voltar para lista</button>
              
            </Detalhesconteiner>
     
            </TelaDeDetalhes>
            </div>
            <Footer />
            </div>
        )
    }
}