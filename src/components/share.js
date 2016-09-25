import React from 'react';

export default class Share extends React.Component {
  share(e) {
    let src = e.currentTarget.previousSibling.src;
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + src);
  }
  render() {
    return (
      <section id="share">
        <h1 className="center">{this.props.title}</h1>
        <img src={this.props.imageURL} />
        <button onClick={this.share}>Share on Facebook</button>
      </section>
    );
  }
}
