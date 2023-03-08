import React from "react";

import "./App.scss";

import Navbar from "../components/Navigation/Navbar";
import InputField from "../components/InputField/InputField";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const App = (props) => {
    const [wordCount, setWordCount] = React.useState(0);

    return (
        <div className="App">
            <Navbar/>
            <div className={"main"}>
                <InputField onChange={setWordCount}/>
                <Sidebar wordCount={wordCount}/>
            </div>
        </div>
    );
};

export default App;
