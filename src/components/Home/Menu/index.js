import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import Article from '../Article/index.js';



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
