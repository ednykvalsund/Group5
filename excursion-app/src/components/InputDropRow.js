import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [selected, setSelected] = React.useState('');
const options =props.options;
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="Forms">
      <FormControl>
        <Select 
          id={props.title}
          value={selected}
          //label={props.title}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={handleChange}
        >
          <MenuItem disabled value="">{props.title}</MenuItem>
          {options.map((option) => (
               <MenuItem value={option}>{option}</MenuItem>
  ))}
        </Select>
      </FormControl>
    </div>
  );
}
