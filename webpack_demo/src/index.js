import cat from './imgs/cat-cat.gif';
import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div>
            <h1>Here's a picture</h1>
            <img src={cat} alt="" srcset="" />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.append(root);

    ReactDOM.render(<App />, root);
})