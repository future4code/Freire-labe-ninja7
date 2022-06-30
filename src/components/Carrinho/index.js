import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default class Carrinho extends React.Component {
    
  render() {
    return (
        <div>
            <Header 
            irParaHome={this.props.irParaHome}
			irParaContratarUmNinja={this.props.irParaContratarUmNinja}
			irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
            irParaCarrinho={this.irParaCarrinho}/>
            
            <h1> asokldhioasdhoi </h1>
            <Footer />
        </div>
    )
}
}