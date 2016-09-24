import React from 'react';

export default class Jumbotron extends React.Component {
  render() {
    return (
      <section className="jumbotron" style={{backgroundImage: `url(${this.props.imageURL})`}}></section>
    );
  }
}
