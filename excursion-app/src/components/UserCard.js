import React from "react";
import anonymousProfileImage from "../imagefiles/user_icon.png";
import IconButton from "./IconButton";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      //currentUsers=[] //Call json data to here
      userName: "John",
    };
  }

  render() {
    //let userName = this.state.userName
    //        <IconButton />

    return (
      <div className="user-card">
        <img src={anonymousProfileImage} id="anon-prof-image"></img>
        <div className="card-text-container">
          <p id="name-on-user-card">{this.state.userName}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
