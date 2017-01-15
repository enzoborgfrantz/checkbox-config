import React from 'react';
import Main from '../components/Main.js';
import Home from '../components/Home.js';
import {Router, Route, IndexRedirect} from 'react-router'
var IndexRoute = Router.IndexRoute;

module.exports = (
        <Route path="/" component={Main}>
        </Route>
);
