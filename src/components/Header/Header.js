import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import logo from './logo.svg';
import './style.css';

export default class Header extends Component {
    render() {
        const { className, ...props } = this.props;
        return(
            <div className={classnames('app--header', className)} {...props}>
              <img src={logo} className="app--logo" alt="logo" />
              <h2>Welcome to React+Routing</h2>

              <nav>
                  <ul className={classnames('app--header-nav')}>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/About">About</Link>
                      </li>
                  </ul>
              </nav>
            </div>
        )
    }
}
