import React from "react";

import "./Sidebar.scss";

import WordCounter from "./Word-Counter/WordCounter";
import WordLimitForm from "./WordLimitForm/WordLimitForm.jsx";
import NotificationCenter from "./NotificationCenter/NotificationCenter.jsx";

const Sidebar = ({ wordCount }) => {
  const [wordLimitations, setWordLimitations] = React.useState([0, 0]);

  return (
    <div className="Sidebar">
      <WordCounter
        wordCount={wordCount}
        recommendedWords={wordLimitations[0]}
        limitedWords={wordLimitations[1]}
      />
      <WordLimitForm onSubmit={setWordLimitations} />
      <NotificationCenter />
    </div>
  );
};

export default Sidebar;
