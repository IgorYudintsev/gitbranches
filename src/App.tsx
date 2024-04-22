import React from 'react';
import './App.css';
import {Igor} from "./Igor";
import {Sasha} from "./Sasha";
import {NewSasha} from "./NewSasha";
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
            <NewSasha/>
            <div>22.04.2024-10:06-MAIN</div>
            <div>22.04.2024-10:06-MAIN-REVERTED</div>
        </div>
    );
}

export default App;
