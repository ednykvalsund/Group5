import React from "react";


  
  function TextButton({ className, label, handleClick, }){
    return(
    <button
      className={className}
      onClick={handleClick}
    >
      {label}
    </button>
    );
  }
  
  export default TextButton;