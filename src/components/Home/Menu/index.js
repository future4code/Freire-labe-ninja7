import React from 'react';
import Header from '../header/index'
import Footer from '../footer/index';
import Article from '../article/index.js';



export default class Menu extends React.Component {
    
  render() {
    return (
        <div>
            <Header 
                irParaHome={this.props.irParaHome}
                irParaContratarUmNinja={this.props.irParaContratarUmNinja}
                irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
                irParaCarrinho={this.props.irParaCarrinho}/>

            <Article/>
            <Footer />
        </div>
    )
}
}
