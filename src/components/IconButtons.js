import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

//Not done and doesnt work
function IconButton(props) {
  return (
    <div className="IconButton" id={props.allignment}>
      <EditIcon />
      <DeleteIcon />
    </div>
  );
}

export default IconButton;
