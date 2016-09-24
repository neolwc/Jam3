import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';

class Root extends React.Component {
  render() {
    return (
      <div id="root">
        <header>
          <Menu list={['text', 'twitter', 'carousel', 'share']} />
        </header>
        <main>
          <Jumbotron imageURL="https://goo.gl/iGA0Ih" />
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('Jam3'));
