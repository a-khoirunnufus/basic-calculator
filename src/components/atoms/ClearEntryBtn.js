import React from 'react';

export default function ClearEntryBtn({ id, handleCE }) {
	const handleClick = () => {
		handleCE();
		document.activeElement.blur();
	};

	return (
		<button id={id} className="btn btn--number" onClick={ () => handleClick() }>
			<span>CE</span>
		</button>
	);
}