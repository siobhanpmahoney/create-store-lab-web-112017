import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
  }
}

listenNewUserUsername = (event) => {
  this.setState({
    username: event.target.value
  })

}

listenNewUserHometown = (event) => {
  this.setState({
    hometown: event.target.value
  })
}

handleAddNewUser = (event) => {
  event.preventDefault()
  this.props.store.dispatch({
    type: 'ADD_USER',
    user: {
      username: this.state.username,
      hometown: this.state.hometown,
    }
  })
}


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleAddNewUser(event)}>
          <input type="text" value={this.state.username} onChange = {this.listenNewUserUsername} />
          <input type="text" value={this.state.hometown} onChange={this.listenNewUserHometown} />
        </form>
      </div>
    );
  }
};

export default UserInput;
