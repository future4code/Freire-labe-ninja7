import React from 'react';
import './index.css';
import trabalho1 from './img/trabalho1.jpg'
import trabalho2 from './img/trabalho2.jpg'
import logo from './img/logo.png'
import trabalho4 from './img/trabalho4.jpg'


class Article extends React.Component {
  render() {
    return (
            <div className="container">
                <img src={logo} width="400px"></img>
            </div> 
    )
}
}

export default Article;