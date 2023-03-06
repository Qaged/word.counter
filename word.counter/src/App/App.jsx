import React from "react";

import "./App.scss";

import Navbar from "../components/Navigation/Navbar";
import InputField from "../components/InputField/InputField";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const App = (props) => {
    return (
        <div className="App">
            <Navbar/>
            <div className={"main"}>
                <InputField/>
                <Sidebar/>
            </div>
        </div>
    );
};

export default App;
