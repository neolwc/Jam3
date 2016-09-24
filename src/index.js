import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';

class Root extends React.Component {
  render() {
    return (
      <Menu list={['text', 'twitter', 'carousel', 'share']} />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('Jam3'));
