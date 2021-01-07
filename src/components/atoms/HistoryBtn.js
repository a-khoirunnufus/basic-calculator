import React from 'react';
import historyIcon from '../../assets/icons/history-icon.svg';

export default function HistoryBtn(props) {
	const handleClick = () => {
		console.log('history button pressed!');
		document.activeElement.blur();
	};

	return (
		<button id={props.id} className="btn btn--history" onClick={ () => handleClick() }>
			<img src={historyIcon} />
		</button>
	);
}