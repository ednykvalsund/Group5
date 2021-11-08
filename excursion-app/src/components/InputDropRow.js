// source: https://www.npmjs.com/package/reactjs-dropdown-component

import React from "react";
import { DropdownMultiple, Dropdown } from "reactjs-dropdown-component";

class InputDropRow extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
    options: props.options
    };
  }

  onChange = (item, name) => {
    console.log(item, name);
  };
  render() {
    const { options } = this.state;
    return (
      <div>
        <Dropdown
          name= {this.state.title}
          title={this.state.title}
          list={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default InputDropRow;
