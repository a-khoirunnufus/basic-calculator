import React from 'react';

export default function OperatortBtn(props) {
	const handleClick = () => {
		console.log('operator button pressed!');
		document.activeElement.blur();
	};

	return (
		<button id={props.id} className="btn btn--operator" onClick={ () => handleClick() }>
			<span>{props.opr}</span>
		</button>
	);
}