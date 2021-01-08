import React from 'react';

export default function Screen({ value, statusText }) {
	// let string = '';
	// for ( let item of value ) {
	// 	string = string + item;
	// 	console.log(string);
	// };
	return (
		<div className="screen">
			<div className="screen--status">{statusText}</div>
			<div className="screen--text">{value}</div>
		</div>
	);
}