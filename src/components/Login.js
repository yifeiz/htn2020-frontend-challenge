import React from "react";

import "../styles/login.scss";

class Login extends React.Component {
  state = { user: "", password: "" };

  onUserLogin = event => {
    this.props.onUserLogin(this.state.user, this.state.password);
  };

  render() {
    return (
      <div className="container login-container">
        <form onSubmit={this.onUserLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="spongebob@pineapple.ca"
              value={this.state.user}
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="<3Gary"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
