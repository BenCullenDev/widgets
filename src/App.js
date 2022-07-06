import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
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

const showAccordion = () => {
	if (window.location.pathname === "/") {
		return <Accordion items={items} />;
	}
};

const showList = () => {
	if (window.location.pathname === "/list") {
		return <Search />;
	}
};

const showDropdown = () => {
	if (window.location.pathname === "/dropdown") {
		return <Dropdown />;
	}
};

const showTranslate = () => {
	if (window.location.pathname === "/translate") {
		return <Translate />;
	}
};

const App = () => {
	return (
		<div>
			<h1>Widgets App</h1>
			{showAccordion()}
			{showList()}
			{showDropdown()}
			{showTranslate()}
		</div>
	);
};
export default App;
