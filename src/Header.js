import React, { Component } from 'react';
//import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { data, getTitle } from './index';

let top = -1;

export class Header extends Component {
  state = {
    hidden: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll(a) {//debugger;
    let newTop = a.target.scrollTop;
    if (top == -1)
        top = newTop

    else {
        if (newTop > top) {
            console.log('down');
            if (!this.state.hidden)
                this.setState({ hidden: true });
        }
        else {
            console.log('up');
            if (this.state.hidden)
                this.setState({ hidden: false });
        }
        top = newTop;
    }

  }

  scrollDown() {
    console.log('down');
  }

  scrollUp() {
    console.log('up');
  }

    render() {
        return (
            <div className={'header' + (this.state.hidden ? ' header-hidden' : '')} onClick={this.props.onClick}>
                
                  {/*<div class='text-wrapper'>
                    <div className={this.props.menuShown ? 'box-1-open': 'box-1'}>
                        &nbsp;
                    </div>
                    <div className={this.props.menuShown ? 'box-2-open' : 'box-2'}>
                        &nbsp;
                    </div>
                    <div className={this.props.menuShown ? 'box-3-open' : 'box-3'}>
                        &nbsp;
                    </div>
                  </div>*/}
              <a className='center left white'>{getTitle({ target: window.location})} </a> 
          <div>&nbsp;</div>  
          </div>
        );
    }
}

