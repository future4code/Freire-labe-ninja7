import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Contratar from './components/Contrata/Contratar';
import Detalhes from './components/Detalhes/Detalhes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  `

const HeaderContainer = styled.div` 
	height: 15vh;
	background-color: #000000;
  color: white;
	padding: 0 45px;
	font-size: 22px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0px;
`
const ButtonContainer = styled.div` 
  display: flex;
  height: 40px;
	width: 50px;
  justify-content: space-between;
	align-items: center;
	border-radius:15px;
	margin: 25px;
	padding: 10px 45px;
	
  button{
		margin: 6px
	}
`


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