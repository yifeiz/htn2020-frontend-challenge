import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import { fetchUsers } from "../actions";

class App extends React.Component {
  state = { userName: "", password: "", loggedIn: false };
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUsers })(App);
