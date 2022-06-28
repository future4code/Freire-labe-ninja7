import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div` 
	width: 100vw;
	height: 30vh;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;
	margin-top: 30px;
`

export default class Home extends React.Component{
    render(){
        return(
            <BodyContainer>
            <h1>LabeNinjas</h1>
            <h3>Para quem é ou para quem procura!</h3>
            <div>
              
                <button onClick={()=> this.props.irParaCadastro("CADASTRO")}>Quero ser um Ninja!</button>
                <button onClick={()=> this.props.irParaContratar("CONTRATAR")}>Quero contratar um Ninja!</button>
                  
              </div>
              </BodyContainer>
        )
    }
}