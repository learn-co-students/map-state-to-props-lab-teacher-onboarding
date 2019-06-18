import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>{this.props.userCount}</p>
        <ul>
          {this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
//add mapStateToProps here

export default connect(mapStateToProps)(Users)
