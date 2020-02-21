import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import Login from "./Login";
import { UserLogin, UserLogout } from "../actions";

class App extends React.Component {
  state = { userName: "", password: "", loggedIn: false };

  onUserLogin = (user, password) => {
    console.log(user);
    console.log(password);
    if (user === "spongebob@pineapple.ca" && password === "<3Gary") {
      this.props.UserLogin();
    } else {
      alert(
        "Sorry, invalid credentials. Please try again (Hint: look at the template"
      );
    }
  };

  onUserLogout = () => {
    this.props.UserLogout();
  };

  renderApp(loggedIn) {
    if (loggedIn) {
      return <Profile onUserLogout={this.onUserLogout} />;
    } else {
      return <Login onUserLogin={this.onUserLogin} />;
    }
  }
  render() {
    return <div>{this.renderApp(this.props.loggedIn)}</div>;
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps, { UserLogin, UserLogout })(App);
