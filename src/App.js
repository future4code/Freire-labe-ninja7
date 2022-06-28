import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Contratar from './components/Contrata/Contratar';
import Detalhes from './components/Detalhes/Detalhes';
import Header from './components/home/header/index'
import Footer from "./components/home/footer/index"
import Article from './components/home/article';


{/* <Header></Header>
<Article></Article>
<Footer></Footer> */}

export default class App extends React.Component {

	state = {
		paginaAtual: "HOME",
		detalhesDoServico: "",
		carrinho: []
	}

	adicionaAoCarrinho = (servico) => {
		const novoCarrinho = [...this.state.carrinho, servico]
		this.setState({ carrinho: novoCarrinho })
		alert(`O serviço ${servico.title} foi adicionado ao carrinho.`)
	}

	irParaDetalhes = (servicoId) => {
		this.setState({ paginaAtual: "DETALHES", detalhesDoServico: servicoId })
	}

	irParaContratar = () => {
		this.setState({ paginaAtual: "CONTRATAR" })
	}

	irParaHome = () => {
		this.setState({ paginaAtual: "HOME" })
	}
	
	atualizaPagina = () => {
		switch (this.state.paginaAtual) {
			case "HOME":
				return <Home
					irParaCadastro={this.irParaCadastro}
					irParaContratar={this.irParaContratar} />
		
			case "CONTRATAR":
				return <Contratar
					irParaDetalhes={this.irParaDetalhes}
					adicionaAoCarrinho={this.adicionaAoCarrinho}
				/>
	
			case "DETALHES":
				return <Detalhes
					irParaContratar={this.irParaContratar}
					servicoId={this.state.detalhesDoServico}
				/>

			default:
				return <div>"página não encontrada"</div>
		}
	}

	render() {
		return (
			<div>
				<GlobalStyle />
				<HeaderContainer>
					<h2>LabeNinjas</h2>

					<ButtonContainer>
						<button onClick={() => { this.irParaHome() }}>Home</button>
						<button onClick={() => { this.irParaCarrinho() }}>Carrinho</button>
					</ButtonContainer>

				</HeaderContainer>

				<div>
					{this.atualizaPagina()}
				</div>
			</div>
		)
	}
}
