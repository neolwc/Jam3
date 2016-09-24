import React from 'react';

export default class Menu extends React.Component {
  toggle() {
    document.querySelector('button.hamburger').classList.toggle('is-active');
    document.querySelector('nav').classList.toggle('open');
  }
  render() {
    let links = this.props.list.map((link, n) => <a onClick={this.toggle} className="center" href={"#"+link} key={n}>{link}</a>);
    return (
      <div className="container">
        <nav>
          <button onClick={this.toggle} className="hamburger hamburger--spin" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          {links}
        </nav>
      </div>
    );
  }
}
