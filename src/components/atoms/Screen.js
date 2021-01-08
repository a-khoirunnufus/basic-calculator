import React from 'react';

export default function Screen({ value }) {
	let string = '';
	for ( let item of value ) {
		string = string + item;
	};

	return (
		<div className="screen">
			<span>{string}</span>
		</div>
	);
}