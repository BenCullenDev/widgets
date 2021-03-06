import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div>
			<h1>Translate Widget</h1>
			<div>
				<div className='ui form'>
					<div className='field'>
						<label>Enter the text you wish to translate:</label>
						<input value={text} onChange={(e) => setText(e.target.value)} />
					</div>
				</div>
				<Dropdown
					label='Select the language you wish to translate to:'
					options={options}
					selected={language}
					onSelectedChange={setLanguage}
				/>
				<hr />
				<h3 className='ui header'>Output</h3>
				<Convert text={text} language={language} />
			</div>
		</div>
	);
};

export default Translate;
