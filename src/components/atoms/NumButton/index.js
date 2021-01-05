import React, { useEffect } from 'react';
import './index.scss';

export default function NumButton() {
	const handleClick = () => {
		console.log('button 7 pressed!');
		document.activeElement.blur();
	};

	return (
		<button id="num-button" className="num-button" onClick={ () => handleClick() }>
			<span>7</span>
		</button>
	);
}