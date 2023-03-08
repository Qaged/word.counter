import React from 'react';

import "./WordLimitForm.scss"

const WordLimitForm = ({onSubmit}) => {
    const [recommendedWords, setRecommendedWords] = React.useState(0);
    const [limitedWords, setLimitedWords] = React.useState(0);

    const handleRecommendedWordsChange = (event) => {
        const {value} = event.target;
        if (value > 0){
            setRecommendedWords(value);
        } else {
            setRecommendedWords(0);
        }

    }

    const handleLimitedWordsChange = (event) => {
        const {value} = event.target;
        if (value > 0){
            setLimitedWords(value);
        } else {
            setLimitedWords(0);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit([recommendedWords, limitedWords]);
    }


    return (
        <div className={"input-form"}>
            <p className={"title"}>Word Limitations</p>

            <form onSubmit={handleSubmit}>
                {/* Recommended words */}
                <div className={"container c1"}>
                    <label>Recommended words: </label>
                    <input onChange={handleRecommendedWordsChange} type="number" placeholder="100"/>
                </div>


                {/* Maximal words */}
                <div className={"container c2"}>
                    <label>Maximal words: </label>
                    <input onChange={handleLimitedWordsChange} type="number" placeholder="150"/>
                </div>


                {/* Submit button */}
                <button type={"submit"} disabled={true}>Apply</button>
            </form>
        </div>
    );
};

export default WordLimitForm;