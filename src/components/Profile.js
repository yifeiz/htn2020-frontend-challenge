import React from "react";
import { connect } from "react-redux";

import SearchBar from "./SearchBar";
import ProfileDetails from "./ProfileDetails";

class Profile extends React.Component {
  state = { currentUser: null };

  onUserLogout = () => {
    this.props.onUserLogout();
  };

  renderProfile(user) {
    if (user) {
      return (
        <div className="card container">
          <h2 className="card-title"> {user.name}</h2>
          <h5 className="card-subtitle"> {user.type} </h5>
          <div className="row">
            <img className="col-6" src={user.profile_pic} alt="profile-pic" />
            <div className="col-6">{user.bio}</div>
          </div>
          <div> ID: {user.id}</div>
          <div>Checked In: {user.checked_in ? "yes" : "no"} </div>
          <ProfileDetails type={user.type} />
          <div className="button-group">{this.renderButtons(user.actions)}</div>
        </div>
      );
    }
    return <div>Sorry, no user was found.</div>;
  }

  renderButtons(actions) {
    if (actions) {
      return actions.map(action => {
        return (
          <button className="btn btn-primary" key={action}>
            {action}
          </button>
        );
      });
    }
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-row-reverse justify-content-between">
          <div className="d-inline-flex">
            <button
              className="btn btn-primary"
              onClick={() => this.onUserLogout()}
            >
              {" "}
              Log Out
            </button>
          </div>
          <SearchBar />
        </div>

        {this.renderProfile(this.props.user)}
      </div>
    );
  }
}

const mapStateToProps = (state = []) => {
  console.log(state);
  if (state) {
    return { user: state.user };
  }
  return state;
};

export default connect(mapStateToProps)(Profile);
