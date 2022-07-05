import React from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
	{
		label: "The Colour Red",
		value: "Red",
	},
	{
		label: "The Colour Green",
		value: "Green",
	},
	{
		label: "The Colour Blue",
		value: "Blue",
	},
];

// const items = [
// 	{
// 		title: "What is React?",
// 		content: "React is a frontend javascript framework.",
// 	},
// 	{
// 		title: "Some other title/question",
// 		content: "Here is some more conent.",
// 	},
// 	{
// 		title: "The third title or question",
// 		content: "Here is even more content",
// 	},
// ];

const App = () => {
	return (
		<div>
			<h1>Widgets App</h1>
			<Dropdown options={options} />
		</div>
	);
};
export default App;
