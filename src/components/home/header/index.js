import React from 'react';
import './index.css';
import logo from './img/logo.png'
import carrinho from './img/carrinho.png'


export default class Header extends React.Component {
  render() {
    return (
        <div className="contene">
                <header class="header">
                    <img className='logo' src={logo} alt="logo" onClick={this.props.irParaHome}></img>
                    <nav>
                        <ul className='nav-links'>
                            <li onClick={() => {this.props.irParaHome()}}> Home</li>
                            <li onClick={() => {this.props.irParaContratarUmNinja()}}> Contratar um Ninja </li>
                            <li onClick={() => {this.props.irParaQueroSerUmNinja()}}> Quero Ser um Ninja</li>
                        </ul>
                    </nav>
                    <div className='header-button'>
                        <a className='cta' href='#'><button onClick={this.props.irParaCarrinho}><img src={carrinho} width={20} height={20} ></img>⠀Carrinho</button></a>
                    </div>
                </header>
        </div>
    )
}
}
