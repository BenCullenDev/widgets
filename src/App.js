import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript framework.'
    },
    {
        title: 'Some other title/question',
        content: 'Here is some more conent.'
    },
    {
        title: 'The third title or question',
        content: 'Here is even more content'
    }
]



export default () => {
    return (
        <div>
            <h1>Widgets App</h1>
            <Accordion items={items} /> 
        </div>
        
    )
};