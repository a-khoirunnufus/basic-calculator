import React from 'react';

export default function NumberBtn(props) {
	const handleClick = () => {
		console.log('number button pressed!');
		document.activeElement.blur();
	};

	return (
		<button className="btn btn--number" onClick={ () => handleClick() }>
			<span>{props.number}</span>
		</button>
	);
}