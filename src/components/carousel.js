import React from 'react';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      imagesIndices: [],
      currentClasses: "box",
      previousIndices: [],
      previousClasses: "box",
      toggle: true
    };
  }
  componentDidMount() {
    let indices = [];
    for (var i = 0; i < this.props.number; i++) {
      indices.push(i);
    }
    this.setState({
      imagesIndices: indices
    });
  }
  slide(right) {
    let l = this.state.imagesIndices.length;
    let m = this.props.images.length;
    let comingIndices = this.state.imagesIndices.map((n) => {
      if (!right) return (n - l) < 0 ? m + n - l : n - l;
      else return (n + l) >= m ? n + l - m : n + l;
    });
    this.setState({
      imagesIndices: comingIndices,
      currentClasses: `box ${right ? "fadeInRight" : "fadeInLeft"}`,
      previousIndices: this.state.imagesIndices,
      previousClasses: `box ${right ? "fadeOutLeft" : "fadeOutRight"}`,
      toggle: !this.state.toggle
    });
  }
  render() {
    return (
      <section id="carousel">
        <h1 className="center">{this.props.title}</h1>
        <div className="container">
          <div className="content">
            <Box
              className={this.state.toggle ? this.state.previousClasses : this.state.currentClasses}
              images={(this.state.toggle ? this.state.previousIndices : this.state.imagesIndices)
                .map((i) => this.props.images[i])}
            />
            <Box
              className={this.state.toggle ? this.state.currentClasses : this.state.previousClasses}
              images={(this.state.toggle ? this.state.imagesIndices : this.state.previousIndices)
                .map((i) => this.props.images[i])}
            />
          </div>
          <div className="left" onClick={this.slide.bind(this, false)}>
            <div className="arrow"></div>
          </div>
          <div className="right" onClick={this.slide.bind(this, true)}>
            <div className="arrow"></div>
          </div>
        </div>
      </section>
    );
  }
}

class Box extends React.Component {
  render() {
    let imgs = this.props.images.map((src, i) => <div key={i}><img src={src} /></div>);
    return (
      <div className={this.props.className}>
        {imgs}
      </div>
    );
  }
}
