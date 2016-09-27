import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Jumbotron from './components/jumbotron';
import Text from './components/text';
import Twitter from './components/twitter';
import Carousel from './components/carousel';
import Share from './components/share';
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
          <Twitter />
          <Carousel
            title = "Carousel"
            number = {3}
            images = {["http://www.jam3.com/wp-content/uploads/2015/07/02_haluk-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2016/02/vikings-featured-03-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/07/SevenSins-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Bear71-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/WhiteDoves-Feature-Image1-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Norton-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2015/09/feature-image-tiff1-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/CountryDeep-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Toyota-Feature-Image-B-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Defector-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Skittles-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Waterlife-Feature-Image-720x408.jpg"]}
          />
          <Share title="Share" imageURL="https://goo.gl/iGA0Ih" />
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('Jam3'));
