import React from "react";

import { connect } from "react-redux";

class ProfileDetails extends React.Component {
  renderDetails(type) {
    if (type && this.props.user) {
      switch (type) {
        case "hacker":
          return (
            <div>
              Number of Workshops Attended:{" "}
              {this.props.user.num_workshops_attended}
            </div>
          );
        case "organizer":
          return <div> Phone Number: {this.props.user.phone_number}</div>;
        case "volunteer":
          let readableDate = new Date(this.props.user.next_shift).toString();
          return <div> Next Shift: {readableDate}</div>;
        case "sponsor":
          return (
            <div>
              <div> Company: {this.props.user.sponsor_company}</div>
              <div>
                Company Link:{" "}
                <a href={this.props.user.sponsor_company_link}>
                  {" "}
                  Link to Company site{" "}
                </a>
              </div>
            </div>
          );
        default:
          return;
      }
    }
  }
  render() {
    return <div>{this.renderDetails(this.props.type)}</div>;
  }
}

const mapStateToProps = state => {
  if (state) {
    return { user: state.user };
  }
  return state;
};

export default connect(mapStateToProps)(ProfileDetails);
