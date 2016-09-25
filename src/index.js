import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Jumbotron from './components/jumbotron';
import Text from './components/text';
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
          <Text title="Title">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
            <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
          </Text>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('Jam3'));
