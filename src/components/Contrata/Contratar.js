import Axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

const AlinhaInputs = styled.div`

justify-content: space-around;
margin: 30px 200px;

@media(max-width: 896px ) {

    justify-content: space-between;
    display: grid;
    margin: 30px 30px;
}

input {

    margin-left: 15px;

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
    
    width: 15vw;
    height: 35px;

    @media(max-width: 896px ) {

        margin: 5px;
        width: 85vw;
        height: 35px;
}
}
select{
    margin-left: 15px;

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
    
    width: 15vw;
    height: 35px;

    @media(max-width: 896px ) {

    margin: 5px;
    width: 85vw;
    height: 35px;
}

}


`
const AlinharCards = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

@media(max-width: 667px ) {
    
    grid-template-columns: repeat(1, 1fr);
           
}`

const Carregando =  styled.div`

    display: block;
    margin-left: 45%;
    margin-right: 45%;


    .carregando{
        animation: is-rotating 1.2s linear infinite;
        height: 60px;
        width: 60px;
        border: 6px solid #e5e5e5;
        border-top-color: #ff009c ;
        margin-top: 180px;
        margin-bottom: 180px;
        border-radius: 50px;
  
    }

    @keyframes is-rotating {

        to {
            transform: rotate(1turn);
        }
        
    }


`

const TelaComOsCards = styled.div`

    display: flex;
    justify-content: center;
    padding: 50px;

`
export default class Contratar extends React.Component {
    state = {
        listaDeServico: [],
        listaDeServicoFiltrada: [],
        valorMin: "",
        valorMax: "",
        buscar: "",
        ordem: ""
    }
    componentDidMount() {
        this.pegarTrabalhos()
        this.filtroDosServicos()
    }
    componentDidUpdate(prevProps, prevState){
        if(
            this.state.valorMin !==prevState.valorMin ||
            this.state.valorMax !==prevState.valorMax ||
            this.state.buscar !==prevState.buscar ||
            this.state.ordem !==prevState.ordem
        ){
            this.filtroDosServicos()
        }
    }

    atualizarValorMin = (e) =>{
        this.setState({valorMin: e.target.value})
    }
    atualizarValorMax = (e) =>{
        this.setState({valorMax: e.target.value})
    }
    atualizarBuscar = (e) =>{
        this.setState({buscar: e.target.value})
    }
    atualizarOrdem = (e) =>{
        this.setState({ordem: e.target.value})
    }
    
    pegarTrabalhos = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        Axios.get(url, {
            headers:
                { Authorization: '7d95ba58-9060-4f89-9805-67c14d11e93d' }
        }).then((res) => {
            this.setState({ listaDeServico: res.data.jobs, listaDeServicoFiltrada: res.data.jobs })
        }).catch((err) => {
        })
    }
    filtroDosServicos= () =>{
        const minimo = this.state.valorMin ? Number(this.state.valorMin) : -Infinity
        const maximo = this.state.valorMax ? Number(this.state.valorMax) : Infinity

        const novaListaDeServicos = this.state.listaDeServico
        .filter((servico) => servico.price >= minimo)
        .filter((servico)=> servico.price <= maximo)
        .filter((servico)=> {
            const tituloDoServico = servico.title.toLowerCase()
            const descricaoDoServico = servico.description.toLowerCase()
            const textoDaBusca = this.state.buscar.toLocaleLowerCase()
            return tituloDoServico.includes(textoDaBusca) || descricaoDoServico.includes(textoDaBusca)
        }).sort((a, b)=>{
            switch (this.state.ordem){
                case "Menor Valor":
                    return a.price - b.price
                case "Maior Valor":
                    return b.price - a.price 
                case "Título":
                    return a.title.localeCompare(b.title)
                case "Prazo":
                    return a.dueDate.localeCompare(b.dueDate)
            }
        })
        this.setState({listaDeServicoFiltrada: novaListaDeServicos})
    }
    render() {
        const servicos = this.state.listaDeServicoFiltrada.map((servico) => {
            return <Card
                key={servico.id}
                servico = {servico}
                irParaDetalhes={this.props.irParaDetalhes}
                adicionaAoCarrinho = {this.props.adicionaAoCarrinho}
                titulo={servico.title}
                preco={servico.price}
                prazo={servico.dueDate}
                
            ></Card>

        })
        return (
            <div>  
                <Header 
                    irParaHome={this.props.irParaHome}
                    irParaContratarUmNinja={this.props.irParaContratarUmNinja}
                    irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
                    irParaCarrinho={this.props.irParaCarrinho}/>
                

                <AlinhaInputs>
                <input value={this.state.valorMin} onChange={this.atualizarValorMin} placeholder="⠀Valor Mínimo"></input>
                <input value={this.state.valorMax} onChange={this.atualizarValorMax} placeholder="⠀Valor Máximo"></input>
                <input value={this.state.buscar} onChange={this.atualizarBuscar} placeholder="⠀busca por título ou descrição"></input>
                
                <select value={this.state.ordem} onChange={this.atualizarOrdem}>
                    <option>⠀Sem Ordenação</option>
                    <option>⠀Menor Valor</option>
                    <option>⠀Maior Valor</option>
                    <option>⠀Título</option>
                    <option>⠀Prazo</option>
                </select>

            </AlinhaInputs>
            {servicos.length > 0 ? (
            <TelaComOsCards>
                <AlinharCards>
                    {servicos}
                </AlinharCards>
            </TelaComOsCards> 
            )  : (
            <Carregando>
                    <div className='carregando'></div>
            </Carregando>
            )}
            <Footer></Footer>
            </div>

        )
    }
}