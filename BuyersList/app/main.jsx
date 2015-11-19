console.log("Hello, from JSX!!!");

var React = = require('react-addons');

var ItemList = require("./components/ItemList.jsx");  // Browserify requires modules makes it easy

React.render(<ItemList />, app)