import React from 'react';

import "./WordLimitForm.scss"

const WordLimitForm = (props) => {
    return (
        <div className={"input-form"}>
            <p className={"title"}>Word Limitations</p>

            <form>
                {/* Recommended words */}
                <label>Recommended words</label>
                <input type="text" placeholder="100"/>

                {/* Maximal words */}
                <label>Maximal words</label>
                <input type="text" placeholder="150"/>

                {/* Submit button */}
                <button>Apply</button>
            </form>
        </div>
    );
};

export default WordLimitForm;