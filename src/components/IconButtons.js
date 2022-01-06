import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";

function Icon(props) {
  const { trash, edit, add } = props;

  if (trash) {
    return <DeleteIcon />;
  } else if (edit) {
    return <EditIcon />;
  } else if (add) {
    return <AddIcon />;
  } else {
    <div></div>;
  }
}

Icon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  trash: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  edit: PropTypes.bool,

  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  add: PropTypes.bool,
};

function IconButtons(props) {
  return (
    <div type="button" onClick={props.onClick} id={props.allignment}>
      {Icon(props)}
    </div>
  );
}

export default IconButtons;
