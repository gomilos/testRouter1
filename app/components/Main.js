var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Links = require('../components/Links')

var Main = React.createClass({
  render: function () {
    return (      
      <div className='main-container'>
      <Links />
      Hello from <b>Main</b>. Set same header for all pages!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
