import React from 'react';
import 'whatwg-fetch';

export default class Twitter extends React.Component {
  constructor() {
    super();
    this.state = {people: []};
  }
  componentDidMount() {
    fetch("http://wenchen.li/api/jam3/twitter.php")
      .then((response) => response.json(), (error) => console.log(error.message))
      .then((json) => {
        let people = json.statuses.map((status) => status.user);
        this.setState({people: people});
      })
      .catch((error) => console.log(error));
  }
  render() {
    let people = this.state.people.map((person, n) => {
      let img = person.profile_image_url.replace('_normal', '');
      return (<Person img={img} name={person.name} screen_name={person.screen_name} key={n} />);
    });
    return (
      <section id="twitter">
        <h1 className="center">Twitter</h1>
        <div className="container">
          {people}
        </div>
      </section>
    );
  }
}

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <img src={this.props.img} />
        <div className="center name">{this.props.name}</div>
        <div className="center screen_name">@{this.props.screen_name}</div>
      </div>
    );
  }
}
