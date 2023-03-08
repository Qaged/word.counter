import React from "react";

import "./InputField.scss";

const InputField = ({onChange}) => {
    const [text, setText] = React.useState("");

    const setCount = onChange;

    const handleTextChange = (event) => {
        const {value} = event.target;
        setText(value);
        const words = value.trim().split(/\s+/);
        setCount(words.length);
    }

    return (
        <div className="InputField">
            <textarea onChange={handleTextChange} name="input" id="inputarea" placeholder="Type here..."></textarea>
        </div>
    );
};

export default InputField;
