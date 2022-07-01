import React, { Component } from 'react';
import Menu from './components/Home/Menu/index';
import Contratar from './components/Contrata/Contratar';
import CadastreServico from './components/Cadastre-Serviço/CadastreServico';
import Detalhes from './components/Detalhes/Detalhes';
import Carrinho from './components/Carrinho/Carrinho';

export default class App extends Component {
	
	state = {
		telaAtual : "Home",
		detalhesDoServico : "",
		carrinho: []
	  }

	mudarDePage = () => {

		switch (this.state.telaAtual){
	
			case "Home":
				return <Menu 
				irParaHome={this.irParaHome}
				irParaContratarUmNinja={this.irParaContratarUmNinja}
				irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
				irParaCarrinho={this.irParaCarrinho}
				/> 
				
				
			case "ContratarUmNinja":
				return <Contratar
				irParaDetalhes={this.irParaDetalhes}
				irParaHome={this.irParaHome}
				irParaContratarUmNinja={this.irParaContratarUmNinja}
				irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
				irParaCarrinho={this.irParaCarrinho}
				adicionaAoCarrinho = {this.adicionaAoCarrinho}
				/> 

			case "QueroSerUmNinja":
				return <CadastreServico 
				irParaHome={this.irParaHome}
				irParaContratarUmNinja={this.irParaContratarUmNinja}
				irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
				irParaCarrinho={this.irParaCarrinho}
				/> 
			case "Detalhes":
				return <Detalhes 
				servicoId= {this.state.detalhesDoServico}
				irParaHome={this.irParaHome}
				irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
				irParaContratarUmNinja={this.irParaContratarUmNinja}
				/> 

			case "Carrinho":
				return <Carrinho 

				irParaHome={this.irParaHome}
				irParaQueroSerUmNinja={this.irParaQueroSerUmNinja}
				irParaContratarUmNinja={this.irParaContratarUmNinja}

				irParaCarrinho={this.irParaCarrinho}
				carrinho={this.state.carrinho}
				limparCarrinho={this.limparCarrinho}
				removeCardDoCarrinho={this.removeCardDoCarrinho}
		
						
				/>
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

	removeCardDoCarrinho = (id) => {
		const deletarCard = window.confirm("Tem certeza que deseja remover este produto?")
		if (deletarCard) {
			const novoCard = this.state.carrinho.filter((carrinhoItem) => {
				return carrinhoItem.id !== id
			})
			this.setState({ carrinho: novoCard })

		}
	}

	limparCarrinho = () => {
		this.setState({ carrinho: [] })
		alert("obrigado por comprar conosco!")
	}

	adicionaAoCarrinho = (servico) => {
		const novoCarrinho = [...this.state.carrinho, servico]
		this.setState({ carrinho: novoCarrinho })
		alert(`O serviço ${servico.title} foi adicionado ao carrinho.`)
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

