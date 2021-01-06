import React from 'react';
import historyIcon from '../../assets/icons/history-icon.svg';

export default function HistoryBtn() {
	const handleClick = () => {
		console.log('history button pressed!');
		document.activeElement.blur();
	};

	return (
		<button className="btn btn--history" onClick={ () => handleClick() }>
			<img src={historyIcon} />
		</button>
	);
}