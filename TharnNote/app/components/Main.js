var React = require('react');

var Main = React.createClass({
   render: function() {
       return (
           <div>
                Hello from React!!!
           </div>
       )
   }
});

// Renders the file
// React.render(<Main />, document.getElementById('app'));

module.exports = Main;