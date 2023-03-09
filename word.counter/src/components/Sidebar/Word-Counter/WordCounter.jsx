import React from 'react';

import "./WordCounter.scss"

const WordCounter = ({wordCount, recommendedWords, limitedWords}) => {

    return (
        <div className={"word-counter"}>
            <p className={"title"}>Words</p>

            <p className={"counter"}><span>{wordCount}</span> of {recommendedWords} (Limit: {limitedWords})</p>
        </div>
    )
        ;
};

export default WordCounter;