import React from 'react';

import "./WordLimitForm.scss"

const WordLimitForm = (props) => {
    return (
        <div className={"input-form"}>
            <p className={"title"}>Word Limitations</p>

            <form>
                {/* Recommended words */}
                <div className={"container c1"}>
                    <label>Recommended words: </label>
                    <input type="number" placeholder="100"/>
                </div>


                {/* Maximal words */}
                <div className={"container c2"}>
                    <label>Maximal words: </label>
                    <input type="number" placeholder="150"/>
                </div>


                {/* Submit button */}
                <button type={"submit"}>Apply</button>
            </form>
        </div>
    );
};

export default WordLimitForm;