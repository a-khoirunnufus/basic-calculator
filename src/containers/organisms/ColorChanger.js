import React from 'react';
import ColorBtn from '../../components/atoms/ColorBtn';

export default function ColorChanger() {
	return (
		<div className="color-changer">
			<ColorBtn id="btn-o" color="orange" isSelected={true} />
			<ColorBtn id="btn-g" color="green" />
			<ColorBtn id="btn-d" color="dark" />
		</div>
	);
}