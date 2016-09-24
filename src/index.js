import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Footer from './components/footer';

class Root extends React.Component {
  render() {
    return (
      <div id="root">
        <header>
          <Menu list={['text', 'twitter', 'carousel', 'share']} />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('Jam3'));
