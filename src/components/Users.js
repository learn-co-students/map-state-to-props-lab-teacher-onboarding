import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { users: state.users };
}

class Users extends Component {
  render() {
    console.log('ASDFDSASDFDSA');
    console.log(this.props);
    return (
      <div>
        <ul>
          Users:
          {this.props.users.map(e => <li key={e.username}>{e.username + ' from ' + e.hometown}</li>)}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        Total: {this.props.users.length}
      </div>
    );
  }
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users);
