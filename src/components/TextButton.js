import React from "react";


  
  function TextButton({ id, label, handleClick, }){
    return(
    <button
      id={id}
      onClick={handleClick}
    >
      {label}
    </button>
    );
  }
  
  export default TextButton;