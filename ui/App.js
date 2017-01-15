var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>, document.getElementById('root'))
