import React from 'react';
import Surface from '../../components/Surface';

export default function CalculatorHistory() {
	return (
		<Surface>
			<div className="history-screen">
			  <span>1 x 7 = 7</span>
			  <span>8 x 6 = 48</span>
			  <span>10 x 9 = 90</span>
			  <span>10 x 9 = 90</span>
			  <div className="scrollbar--horizontal"></div>
			</div>
		</Surface>
	);
}