import React, { Component } from 'react';
import Menu from './components/Home/Menu/index';
import Contratar from './components/Contrata/Contratar';
import CadastreServico from './components/Cadastre-Serviço/CadastreServico';
import Detalhes from './components/Detalhes/Detalhes';
import Carrinho from './components/Carrinho/index';

export default class App extends Component {
	
	state = {
		telaAtual : "Home",
		detalhesDoServico : ""
	  }

	mudarDePage = () => {
		switch (this.state.telaAtual){
	
		case "Home":
			return <Menu 
			irParaHome={this.irParaHome}
			irParaContratarUmNinja={this.irParaContratarUmNinja}
			irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}/> 
			
		case "ContratarUmNinja":
			return <Contratar
			irParaDetalhes={this.irParaDetalhes}
			irParaHome={this.irParaHome}
			irParaContratarUmNinja={this.irParaContratarUmNinja}
			irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}/> 

		case "QueroSerUmNinja":
			return <CadastreServico 
			irParaHome={this.irParaHome}
			irParaContratarUmNinja={this.irParaContratarUmNinja}
			irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}/> 
		case "Detalhes":
			return <Detalhes 
			servicoId= {this.state.detalhesDoServico}
			irParaHome={this.irParaHome}
			irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
			irParaContratarUmNinja={this.irParaContratarUmNinja}
			/> 

		case "Carrinho":
		 	return <Carrinho irParaCarrinho={this.irParaCarrinho}/>
		default:
			return <div> Erro! Essa pagina não existe! </div>
		}
	  }

	irParaHome= () => {
		this.setState({telaAtual: "Home"})
	  }
	
	irParaContratarUmNinja = () => {
		this.setState({telaAtual: "ContratarUmNinja"})
	  }

	irParaQueroSerUmNinja = () => {
		this.setState({telaAtual: "QueroSerUmNinja"})
	  }

	irParaCard = () => {
		this.setState({telaAtual: "Card"})
	  }

	irParaDetalhes = (servicoId) => {
		this.setState({ telaAtual: "Detalhes", detalhesDoServico: servicoId })
	}


	irParaCarrinho = () => {
		this.setState({telaAtual: "Carrinho"})
 }

	render() {
		return (
			<div>
			{this.mudarDePage()}
			</div>
		)
	}
}

