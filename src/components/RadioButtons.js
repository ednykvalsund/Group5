import React from "react";

function RadioButtons({ label1, label2 }) {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {label1}
        </label>
      </div>
      
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          {label2}
        </label>
      </div>
    </div>
  );
}

export default RadioButtons;
