import React from "react";
import anonymousProfileImage from "../imagefiles/user_icon.png";
import IconButtons from "./IconButtons";
import Card from "./Card";
import { Icon } from "@mui/material";
//import PersonIcon from "@mui/icons-material/Person";

function UserCard(props) {
  return (
    <div className="usercard">
      <img src={anonymousProfileImage} id="anon-prof-image" />
    
      <p id="name-on-user-card">{props.name}</p>
      <div className="inline-forms">
      <IconButtons edit />
      <IconButtons trash />

      </div>
    </div>

    // <div className="user-card">
    //   <img src={anonymousProfileImage} id="anon-prof-image"></img>
    //   <IconButtons />
    //   <div className="card-text-container">
    //     <p id="name-on-user-card">{props.name}</p>
    //   </div>
    // </div>
  );
}

export default UserCard;
