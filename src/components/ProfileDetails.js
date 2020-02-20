import React from "react";

class ProfileDetails extends React.Component {
  renderDetails(type) {
    switch (type) {
      case "hacker":
        return <div> Number of Workshops Attended: </div>;
      case "organizer":
        return <div> Phone Number: </div>;
      case "volunteer":
        return <div> Next Shift:</div>;
      case "sponsor":
        return (
          <div>
            <div> Company:</div>
            <div>Company Link:</div>
          </div>
        );
      default:
        return;
    }
  }
  render() {
    return <div>{this.renderDetails(this.props.type)}</div>;
  }
}

export default ProfileDetails;
