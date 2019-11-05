import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    let showId = this.props.match.params.showId;
    let show = getGallery()
      .find((show) => show.id === showId);
    this.setState({ show });
  }

  render() {
    if (this.state.show === undefined) {
      return <Redirect to='not-found' />;
    } else {
      return (
        <div>
          <h1>{this.state.show.name}</h1>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    }
  }
}