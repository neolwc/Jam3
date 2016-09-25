import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <section id="text">
        <h1 className="center">{this.props.title}</h1>
        <div className="container">
          {this.props.children}
        </div>
      </section>
    );
  }
}
