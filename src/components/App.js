import React from "react";
import users from "../apis/users";

class App extends React.Component {
  getUsers = async () => {
    const userData = await users.get("?id=291012924");
    // always get Mr. Goose (for now)
    console.log(userData);
  };
  componentDidMount() {
    this.getUsers();
  }
  render() {
    return <div>App</div>;
  }
}

export default App;
