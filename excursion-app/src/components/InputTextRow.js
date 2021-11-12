






















import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SimpleTextField(props) {
  return (
    <div className="Forms">
      <TextField fullWidth hiddenLabel id="outlined-basic"  variant="outlined" placeholder={props.title}
          />
    </div>
  );
}
