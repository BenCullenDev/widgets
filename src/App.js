import React, { useState } from "react";
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
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);
	return (
		<div>
			<h1>Widgets App</h1>
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>

			{showDropdown ? (
				<Dropdown
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
		</div>
	);
};
export default App;
