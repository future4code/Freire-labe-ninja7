import React, { Component } from 'react';
import Menu from './components/Home/Menu/index';
import Contratar from './components/Contrata/Contratar';
import CadastreServico from './components/Cadastre-Serviço/CadastreServico';
import Detalhes from './components/Detalhes/Detalhes';
<<<<<<< HEAD
=======

>>>>>>> 98e3d61f3e294d657ce8d27dfbd43efd00c8fe83

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
			irParaDetalhes={this.irParaDetalhes}
			irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}/> 
		// case "Carrinho":
		// 	return <TELA DO CARRINHO irParaCarrinho={this.irParaCarrinho}/>
		default:
			return <div> Erro! Essa pagina não existe! </div>
		}
	  }

	irParaHome= () => {
		this.setState({telaAtual: "Home"})
		console.log(1)
	  }
	
	irParaContratarUmNinja = () => {
		this.setState({telaAtual: "ContratarUmNinja"})
		console.log(2)
	  }

	irParaQueroSerUmNinja = () => {
		this.setState({telaAtual: "QueroSerUmNinja"})
		console.log(3)
	  }

	irParaCard = () => {
		this.setState({telaAtual: "Card"})
		console.log(4)
	  }

	irParaDetalhes = (servicoId) => {
		this.setState({ telaAtual: "Detalhes", detalhesDoServico: servicoId })
	}


	// irParaCarrinho = () => {
	// 	this.setState({telaAtual: "Carrinho"})
	//   }


	render() {
		return (
			<div>
			{this.mudarDePage()}
			</div>
		)
	}
}

