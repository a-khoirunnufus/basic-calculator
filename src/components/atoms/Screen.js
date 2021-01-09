import React from 'react';

export default function Screen({ value, statusText }) {
	return (
		<div className="screen">
			<div className="screen--status">{statusText}</div>
			<div className="screen--text">{value}</div>
		</div>
	);
}