import React from "react";

function TextButton({ className, label, handleClick, link }) {
  const handleClicks = async () => {
    window.location.href = link;
  };

  if (handleClick) {
    return (
      <button className={className} onClick={handleClick}>
        {label}
      </button>
    );
  } else {
    return (
      <button className={className} onClick={handleClicks}>
        {label}
      </button>
    );
  }
}

export default TextButton;
