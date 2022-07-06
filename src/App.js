import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const items = [
	{
		title: "What is React?",
		content: "React is a frontend javascript framework.",
	},
	{
		title: "Some other title/question",
		content: "Here is some more conent.",
	},
	{
		title: "The third title or question",
		content: "Here is even more content",
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<h1>Widgets App</h1>
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					label='Choose a Colour'
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
};
export default App;
