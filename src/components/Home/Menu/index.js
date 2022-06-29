import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';


export default class Menu extends React.Component {
    
  render() {
    return (
        <div>
            <Header></Header>
            <Article></Article>
            <Footer></Footer>
        </div>
    )
}
}
