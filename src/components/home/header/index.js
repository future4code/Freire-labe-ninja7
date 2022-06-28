import React from 'react';
import './index.css';
import logo from './img/logo.png'
import carrinho from './img/carrinho.png'


class Header extends React.Component {
  render() {
    return (
        <div className="contene">
                <header class="header">
                    <img className='logo' src={logo} alt="logo" onClick={() => console.log("Home")}></img>
                    <nav>
                        <ul className='nav-links'>
                            <li onClick={() => console.log("Home")}> Home</li>
                            <li onClick={() => console.log("Contratar um Ninja")}> Contratar um Ninja </li>
                            <li onClick={() => console.log("Quero Ser um Ninja")}> Quero Ser um Ninja</li>
                        </ul>
                    </nav>
                    <div className='header-button'>
                        <a className='cta' href='#'><button onClick={() => console.log("Carrinho")}><img src={carrinho} width={20} height={20} ></img>⠀Carrinho</button></a>
                    </div>
                </header>
        </div>
    )
}
}

export default Header;