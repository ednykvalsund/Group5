import * as React from "react";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function SimpleTextField(props) {
  return (
    <div className="Forms">
      <TextField
        className="text"
        fullWidth
        id={props.id}
        label={props.title}
        variant="filled"
        value={props.value}
        onChange={props.onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.children}</InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
}
