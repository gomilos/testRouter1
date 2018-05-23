var React = require('react');
var Prompt = require('../components/Promt');

var PromptContainer = React.createClass({
    //NOTE: this is react context set
    contextTypes: {
        //pass items to components without go thru props
    router: React.PropTypes.object.isRequired
     },
   getInitialState: function () {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e){
    //NOTE:This will update state, and execute re-render PromtContainer control
    this.setState({
        username: e.target.value
    })
  },
   handleSubmitUser: function(e){
    e.preventDefault;    
    var username = this.state.username;
    //NOTE:This will reset state
     this.setState({
        username: ''
    })
    //NOTE: check what is route and redirect to valid page
    if (this.props.routeParams.playerOne) {
        //NOTE: we did set routeParams to 'playerOne' in routes.js by : path="playerTwo/:playerOne" with this part':playerOne'
        //How do we dinamicaly change routes with React routing 
        //=> 1we have to pass 'router' to component by 'context in React' implemented in component by set 'contextTypes' upper
        // 2. and use this this.context.router.push

        console.log(this.contect)//NOTE: this will be router Object
      this.context.router.push({
        pathname: '/battle',
        query: {//note: like this we pass info to our 'battle' route
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
          //go to player two
        console.log(this.contect)//NOTE: this will be router Object
     this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
      console.log(this)
        return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});
module.exports = PromptContainer;