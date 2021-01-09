import React from 'react';

export default function ColorBtn({ id, color, handleChangeBg }) {
	let colorClass = "";
	let outlineClass = "";
	let className = "btn-round";

	switch (color) {
		case "orange":
			colorClass = "btn-round--orange";
			break;
		case "green":
		  colorClass = "btn-round--green";
			break;
		case "dark":
		  colorClass = "btn-round--dark";
			break;
		default:
			break;
	}

	const handleClick = () => {
		handleChangeBg(color);
	}

	className = className +" "+ colorClass +" "+ outlineClass;

	return (
		<button id={id} className={className} onClick={ () => handleClick() } />
	);
}