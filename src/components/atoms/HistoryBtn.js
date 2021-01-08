import React from 'react';
import historyIcon from '../../assets/icons/history-icon.svg';

export default function HistoryBtn(props) {
	const handleClick = () => {
		document.activeElement.blur();
	};

	return (
		<button id={props.id} className="btn btn--history" onClick={ () => handleClick() }>
			<img src={historyIcon} alt="history logo" />
		</button>
	);
}