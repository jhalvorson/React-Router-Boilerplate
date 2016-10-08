import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';
import './index.css';
import Header from './components/Header/Header';

ReactDOM.render(
    <div className="App">
        <Header />
        <Routes history={browserHistory} />
    </div>,
    document.getElementById('root')
);
