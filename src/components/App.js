import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import Login from "./Login";
import { fetchUsers } from "../actions";

class App extends React.Component {
  state = { userName: "", password: "", loggedIn: true };

  onUserLogin = (user, password) => {
    console.log(user);
    console.log(password);
    if (user === "spongebob@pineapple.ca" && password === "<3Gary") {
      this.setState({ loggedIn: true });
    } else {
      alert(
        "Sorry, invalid credentials. Please try again (Hint: look at the template"
      );
    }
  };

  onUserLogout = () => {
    this.setState({ loggedOut: false });
  };

  renderApp(loggedIn) {
    if (loggedIn) {
      return <Profile onUserLogout={this.onUserLogout} />;
    } else {
      return <Login onUserLogin={this.onUserLogin} />;
    }
  }
  render() {
    return <div>{this.renderApp(this.state.loggedIn)}</div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUsers })(App);
