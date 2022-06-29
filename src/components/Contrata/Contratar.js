// import Axios from 'axios';
// import React from 'react';
// import styled from 'styled-components'
// import Card from '../Card/Card';


// const AlinhaInputs = styled.div`
// display: flex;
// justify-content: space-around;
// margin: 20px 0px;

// input {
//     width: 20vw;
//     height: 30px;
//     border-radius: 5px;
// }
// select{
//     width: 20vw;
//     border-radius: 5px;
// }


// `
// const AlinharCards = styled.div`
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// gap: 30px;
// `
// const TelaComOsCards = styled.div`
// display: flex;
// justify-content: center;

// `
// export default class Contratar extends React.Component {
//     state = {
//         listaDeServico: [],
//         listaDeServicoFiltrada: [],
//         valorMin: "",
//         valorMax: "",
//         buscar: "",
//         ordem: ""
//     }
//     componentDidMount() {
//         this.pegarTrabalhos()
//         this.filtroDosServicos()
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(
//             this.state.valorMin !==prevState.valorMin ||
//             this.state.valorMax !==prevState.valorMax ||
//             this.state.buscar !==prevState.buscar ||
//             this.state.ordem !==prevState.ordem
//         ){
//             this.filtroDosServicos()
//         }
//     }

//     atualizarValorMin = (e) =>{
//         this.setState({valorMin: e.target.value})
//     }
//     atualizarValorMax = (e) =>{
//         this.setState({valorMax: e.target.value})
//     }
//     atualizarBuscar = (e) =>{
//         this.setState({buscar: e.target.value})
//     }
//     atualizarOrdem = (e) =>{
//         this.setState({ordem: e.target.value})
//     }
    
//     pegarTrabalhos = () => {
//         const url = "https://labeninjas.herokuapp.com/jobs"
//         Axios.get(url, {
//             headers:
//                 { Authorization: 'e2190c39-7930-4db4-870b-bed0e5e4b88e' }
//         }).then((res) => {
//             console.log(res.data.jobs)
//             this.setState({ listaDeServico: res.data.jobs, listaDeServicoFiltrada: res.data.jobs })
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
//     filtroDosServicos= () =>{
//         const minimo = this.state.valorMin ? Number(this.state.valorMin) : -Infinity
//         const maximo = this.state.valorMax ? Number(this.state.valorMax) : Infinity

//         const novaListaDeServicos = this.state.listaDeServico
//         .filter((servico) => servico.price >= minimo)
//         .filter((servico)=> servico.price <= maximo)
//         .filter((servico)=> {
//             const tituloDoServico = servico.title.toLowerCase()
//             const descricaoDoServico = servico.description.toLowerCase()
//             const textoDaBusca = this.state.buscar.toLocaleLowerCase()
//             return tituloDoServico.includes(textoDaBusca) || descricaoDoServico.includes(textoDaBusca)
//         }).sort((a, b)=>{
//             switch (this.state.ordem){
//                 case "Menor Valor":
//                     return a.price - b.price
//                 case "Maior Valor":
//                     return b.price - a.price 
//                 case "Título":
//                     return a.title.localeCompare(b.title)
//                 case "Prazo":
//                     return a.dueDate.localeCompare(b.dueDate)
//             }
//         })
//         this.setState({listaDeServicoFiltrada: novaListaDeServicos})
//     }
//     render() {
//         const servicos = this.state.listaDeServicoFiltrada.map((servico) => {
//             return <Card
//                 key={servico.id}
//                 servico = {servico}
//                 irParaDetalhes={this.props.irParaDetalhes}
//                 adicionaAoCarrinho = {this.props.adicionaAoCarrinho}
//                 titulo={servico.title}
//                 preco={servico.price}
//                 prazo={servico.dueDate}
                
//             ></Card>

//         })
//         return (
//             <div>  <AlinhaInputs>
//                 <input value={this.state.valorMin} onChange={this.atualizarValorMin} placeholder="Valor Mínimo"></input>
//                 <input value={this.state.valorMax} onChange={this.atualizarValorMax} placeholder="Valor Máximo"></input>
//                 <input value={this.state.buscar} onChange={this.atualizarBuscar} placeholder="busca por título ou descrição"></input>
//                 <select value={this.state.ordem} onChange={this.atualizarOrdem}>
//                     <option>Sem Ordenação</option>
//                     <option>Menor Valor</option>
//                     <option>Maior Valor</option>
//                     <option>Título</option>
//                     <option>Prazo</option>
//                 </select>

//             </AlinhaInputs>
//             <TelaComOsCards>
//                 <AlinharCards>
//                     {servicos}
//                 </AlinharCards>
//             </TelaComOsCards>
//             </div>

//         )
//     }
// }