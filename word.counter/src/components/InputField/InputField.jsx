import React from "react";

import "./InputField.scss";

const InputField = (props) => {
  return (
    <div className="InputField">
      <textarea name="input" id="input" placeholder="Type here..."></textarea>
    </div>
  );
};

export default InputField;
