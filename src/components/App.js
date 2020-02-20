import React from "react";

import Profile from "./Profile";
class App extends React.Component {
  state = { userName: "", password: "", loggedIn: false };

  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default App;
