import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            This is APP components!
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
