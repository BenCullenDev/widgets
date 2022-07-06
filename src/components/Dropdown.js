import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener("click", onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true,
			});
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div
				key={option.value}
				className='item'
				onClick={() => {
					onSelectedChange(option);
				}}>
				{option.label}
			</div>
		);
	});
	const colourChangingText = (label) => {
		if (label === "Choose a Colour") {
			return (
				<p style={{ color: `${selected.value}` }}>
					Change the colour of this text
				</p>
			);
		}
		return null;
	};
	const dropDownHeader = (label) => {
		if (label === "Choose a Colour") {
			return <h1>Dropdown Widget</h1>;
		}
		return null;
	};
	return (
		<div>
			{dropDownHeader(label)}
			<div ref={ref} className='ui form'>
				<div className='field'>
					<label className='label'>{label}</label>
					<div
						onClick={() => {
							setOpen(!open);
						}}
						className={`ui selection dropdown ${open ? "visible active" : ""}`}>
						<i className='dropdown icon'></i>
						<div className='text'>{selected.label}</div>
						<div className={`menu ${open ? "visible transition" : ""}`}>
							{renderedOptions}
						</div>
					</div>
				</div>
				{colourChangingText(label)}
			</div>
		</div>
	);
};

export default Dropdown;
