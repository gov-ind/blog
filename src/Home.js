import React, { Component } from 'react';
import { data } from './index';
import { Link } from 'react-router-dom';

class Chip extends Component {
  render() {
    return <div className='chip'>crypto</div>
  }
}

class Item extends Component {
  render() {
    return (
      <div className='home-list-item'>
        <li><Link to={this.props.route}>{this.props.title}</Link></li>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <ul className='home-list'>
          {data.slice(1).map(({ Page, route, title }) =>
            <Item key={title} route={route} title={title} />)}
        </ul>
      </div>
    );
  }
}

export default Home;

