import React from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class SearchBar extends React.Component {
  state = { user: "" };

  onFormSubmit = event => {
    event.preventDefault();
    let id;
    // console.log(this.state.term);
    if (this.state.user === "Feridun") {
      id = 190258281;
    } else {
      id = 291012924;
    }
    this.props.fetchUsers(id);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label> User </label>
            <input
              type="text"
              value={this.state.term}
              placeholder="e.g. Feridun"
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUsers })(SearchBar);
