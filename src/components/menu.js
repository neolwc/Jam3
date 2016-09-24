import React from 'react';

export default class Menu extends React.Component {
  render() {
    let links = this.props.list.map((link, n) => <a className="center" href={"#"+link} key={n}>{link}</a>);
    return (
      <header>
        <div className="container">
          <nav>
            <button className="hamburger hamburger--spin" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            {links}
          </nav>
        </div>
      </header>
    );
  }
}
