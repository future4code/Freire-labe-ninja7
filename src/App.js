import React, { Component } from 'react';
import Menu from './components/Home/Menu/index';
import Contratar from './components/Contrata/Contratar';
import CadastreServico from './components/Cadastre-Serviço/CadastreServico';
import Card from './components/Card/Card';
import CadastreServico from "./components/Cadastre-Serviço/CadastreServico";

export default class App extends Component {
	
	state = {
		telaAtual : "Home"
	  }

	mudarDePage = () => {
		switch (this.state.telaAtual){
	
		case "Home":
			return <Menu irParaHome={this.irParaHome}/>
		case "ContratarUmNinja":
			return <Contratar irParaContratarUmNinja={this.irParaContratarUmNinja}/>
		case "QueroSerUmNinja":
			return <CadastreServico irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}/>
		case "Card":
			return <Card irParaCard ={this.irParaCard}/>
		// case "Carrinho":
		// 	return <TELA DO CARRINHO irParaCarrinho={this.irParaCarrinho}/>
		default:
			return <div> Erro! Essa pagina não existe! </div>
		}
	  }

	irParaHome= () => {
		this.setState({telaAtual: "home"})
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

