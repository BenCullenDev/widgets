import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

			{showDropdown ? (
				<Dropdown
					label='Choose a Colour'
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			) : null}
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Colour Dropdown
			</button>
			<br />
			<br />
			<br />
			<Translate />
		</div>
	);
};
export default App;
