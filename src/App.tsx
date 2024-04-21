import React from 'react';
import './App.css';
import {Igor} from "./Igor";
import {Sasha} from "./Sasha";
import {NewIgor} from "./NewIgor";

function App() {
    return (
        <div className="App">
            <div>20.04.2024-11:22-MAIN</div>
            <div>20.04.2024-12:03-MAIN</div>
            <div>20.04.2024-12:04-MAIN</div>
            <div>20.04.2024-12:35-MAIN</div>
            <div>20.04.2024-12:36-MAIN</div>
            <Igor/>
            <Sasha/>
            <NewIgor/>
        </div>
    );
}

export default App;
