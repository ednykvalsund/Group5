// source: https://www.npmjs.com/package/reactjs-dropdown-component

import React from "react";
import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";

class InputDropRow extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [
        {
          label: "2021",
          value: "2021",
        },
        {
          label: "2022",
          value: "2022",
        },
        {
          label: "2023",
          value: "2023",
        },
        {
          label: "2024",
          value: "2024",
        }
      ],
    };
  }

  onChange = (item, name) => {
    console.log(item, name);
  };
  render() {
    const { locations } = this.state;
    return (
      <div>
        <Dropdown
          name="location"
          title="Select location"
          list={locations}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputDropRow;
