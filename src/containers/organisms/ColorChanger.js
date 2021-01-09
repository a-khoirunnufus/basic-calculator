import React from 'react';
import ColorBtn from '../../components/ColorBtn';

export default function ColorChanger() {
	const handleChangeBg = color => {
		if (color === 'orange') document.body.style.backgroundColor = '#F2994A';
		if (color === 'green') document.body.style.backgroundColor = '#27AE60';
		if (color === 'dark') document.body.style.backgroundColor = '#171f24';
	}
	return (
		<div className="color-changer">
			<ColorBtn id="btn-o" color="orange" handleChangeBg={handleChangeBg} />
			<ColorBtn id="btn-g" color="green" handleChangeBg={handleChangeBg} />
			<ColorBtn id="btn-d" color="dark" handleChangeBg={handleChangeBg} />
		</div>
	);
}