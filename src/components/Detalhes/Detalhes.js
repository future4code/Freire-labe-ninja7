import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Footer from '../Home/Footer/index.js';
import Header from '../Home/Header/index.js';

const Detalhesconteiner = styled.div`

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


display: flex;
flex-direction: column;
width: 30vw;
height: 20vw;
padding: 15px;


h2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 20px;
    
}
div{
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
}

.descricao{
    margin-top: 20px;

}
`

const TelaDeDetalhes = styled.div`

padding: 100px 100px;
display: flex;
justify-content: center;
margin-top: 20px;

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
                irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}/>
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

              <button onClick={this.props.irParaHome}> Voltar para lista</button>
              
            </Detalhesconteiner>
     
            </TelaDeDetalhes>
            </div>
            <Footer />
            </div>
        )
    }
}