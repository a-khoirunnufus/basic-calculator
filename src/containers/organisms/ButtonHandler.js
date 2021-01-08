import React, { useContext } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { ButtonPressHandler as handleKeyEvent } from '../../configs/ButtonPressHandler';
import { AppContext } from '../../configs/AppContext';

export default function ButtonHandler() {
	const { showResult } = useContext(AppContext);
	return (
		<KeyboardEventHandler
  		handleKeys={['1','2','3','4','5','6','7','8','9','0',',','.','shift+=','+','-','shift+8','*','/','c','backspace','enter','h','r','o','g','b','d']}
  		onKeyEvent={(key, e) => handleKeyEvent(key, showResult)} 
    />
	);
}