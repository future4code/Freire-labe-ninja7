import React from 'react';
import Header from './components/home/header/index'
import Footer from "./components/home/footer/index"
import Article from './components/home/article';

class App extends React.Component {

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

export default App;
