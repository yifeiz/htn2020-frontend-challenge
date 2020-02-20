import React from "react";
import { connect } from "react-redux";

import ProfileDetails from "./ProfileDetails";

class Profile extends React.Component {
  state = { currentUser: null };

  renderProfile(user) {
    if (user) {
      console.log(user);
      return (
        <div className="card">
          <h2 className="card-title"> {user.name}</h2>
          <h5 className="card-subtitle"> {user.type} </h5>
          <div className="container">
            <div className="row">
              <img className="col-6" src={user.profile_pic} alt="profile-pic" />
              <div className="col-6">{user.bio}</div>
            </div>
          </div>
          <div> ID: {user.id}</div>
          <div>Checked In: {user.checked_in ? "yes" : "no"} </div>
          <div className="container-fluid">
            <ProfileDetails type={user.type} />
            <button type="button" className="btn btn-primary btn-block">
              Click me
            </button>
          </div>
        </div>
      );
    }
    return <div>Sorry, no user was found.</div>;
  }

  render() {
    return (
      <div className="container">{this.renderProfile(this.props.user)}</div>
    );
  }
}

const mapStateToProps = (state = []) => {
  if (state.users) {
    return { user: state.users };
  }
  return state;
};

export default connect(mapStateToProps)(Profile);
