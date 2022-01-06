import React from "react";
import anonymousProfileImage from "../imagefiles/user_icon.png";
import IconButtons from "./IconButtons";
import { deleteParticipant } from "../data";

function UserCard(props) {
  function deleteP() {
    if (
      window.confirm(
        "Are you sure you want to delete this participant? The action can not be undone."
      )
    ) {
      deleteParticipant(props.userId, props.setList, props.list);
    }
  }

  return (
    <div className="usercard">
      <img src={anonymousProfileImage} alt="User Icon" id="anon-prof-image" />

      <p id="name-on-user-card">{props.name}</p>
      <div className="inline-forms">
        <IconButtons edit />
        <IconButtons trash onClick={() => deleteP()} />
      </div>
    </div>
  );
}

export default UserCard;
