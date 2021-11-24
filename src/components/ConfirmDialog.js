import React from "react";
import TextButton from "./TextButton";
import WarningIcon from "@mui/icons-material/Warning";

function ConfirmDialog() {
  return (
    <div className="confirm-dialog">
      <div className="dialog-text-container">
        <WarningIcon className="warning-icon"></WarningIcon>
        <h2>Are you sure you want to remove participant?</h2>
        <p>This action cannot be undone</p>
      </div>

      <TextButton label="Cancel" className="grey-button"></TextButton>
      <TextButton label="Remove" className="red-button"></TextButton>
    </div>
  );
}

export default ConfirmDialog;
