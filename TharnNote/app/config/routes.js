// requirements
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRout;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>

    </Route>
);
