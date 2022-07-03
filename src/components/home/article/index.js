import React from 'react';
import './index.css';
import logo from './img/logo.png'

export default  class Article extends React.Component {
  render() {
    return (
            <div className="container">
                <img src={logo} width="400px"></img>
            </div> 
    )
}
}
