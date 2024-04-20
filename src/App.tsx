import React from 'react';
import './App.css';
import {Igor} from "./Igor";
import {Sasha} from "./Sasha";

function App() {
    return (
        <div className="App">
            <div>20.04.2024-11:22-MAIN</div>
            <div>20.04.2024-12:03-MAIN</div>
            <div>20.04.2024-12:04-MAIN</div>
            <div>20.04.2024-12:35-MAIN</div>
            <Igor/>
            <Sasha/>
        </div>
    );
}

export default App;
