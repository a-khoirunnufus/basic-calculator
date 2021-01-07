import React, { useState } from 'react';

export default function ColorBtn(props) {
	let colorClass = "";
	let outlineClass = "";
	let className = "btn-round";

	switch (props.color) {
		case "red":
			colorClass = "btn-round--red";
			break;
		case "orange":
			colorClass = "btn-round--orange";
			break;
		case "green":
		  colorClass = "btn-round--green";
			break;
		case "blue":
		  colorClass = "btn-round--blue";
			break;
		case "dark":
		  colorClass = "btn-round--dark";
			break;
		default:
			break;
	}

	if (props.isSelected) {
		outlineClass = "btn-round--outlined";
	}

	className = className +" "+ colorClass +" "+ outlineClass;

	return (
		<button id={props.id} className={className} />
	);
}