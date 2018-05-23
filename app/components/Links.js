var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Links = React.createClass({
  render: function () {
    return (
      <div><h1>React Router Links</h1>
        <ul role="nav">
          <li><Link to="/">Main</Link></li>          
          <li><Link to="/playerOne">playerOne</Link></li>
          <li><Link to="/playerTwo/:playerOne">player Two</Link></li>
        </ul></div>
    )
  }
});

module.exports = Links;
