import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('About', 'App', className)} {...props}>
                <h1>
                    About
                </h1>

                <p>This is a very basic, boilerplate to integrate <pre>`create-react-app`</pre> with <pre>`react-router`</pre>.</p>
            </div>
        )
    }
}
