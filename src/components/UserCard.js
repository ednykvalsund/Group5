import React from "react";
import anonymousProfileImage from "../imagefiles/user_icon.png";
import IconButtons from "./IconButtons";

//import PersonIcon from "@mui/icons-material/Person";

function UserCard(props) {
  return (
    <div className="usercard">
      <img src={anonymousProfileImage} alt="User Icon" id="anon-prof-image" />

      <p id="name-on-user-card">{props.name}</p>
      <div className="inline-forms">
        <IconButtons edit />
        <IconButtons trash />
      </div>
    </div>
  );
}

export default UserCard;
