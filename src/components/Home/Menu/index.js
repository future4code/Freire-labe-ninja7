import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';


export default class Menu extends React.Component {
    
  render() {
    return (
        <div>
            <Header 
            irParaHome={this.props.irParaHome}
			irParaContratarUmNinja={this.props.irParaContratarUmNinja}
			irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}/>
            <Article/>
            <Footer />
        </div>
    )
}
}
