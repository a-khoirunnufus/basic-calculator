import React, { useEffect } from 'react';
import logo from '../../../assets/logo.svg';
import './index.scss';
import NumButton from '../../../components/atoms/NumButton';
import KeyboardEventHandler from 'react-keyboard-event-handler';

function App() {
	const handleKeyEvent = (key) => {
		console.log(`${key} pressed!`);
		document.getElementById("num-button").classList.add("click");
		setTimeout(() => {
			document.getElementById("num-button").classList.remove("click");
		}, 100);
	};

  return (
    <div className="App">
      <KeyboardEventHandler
    		handleKeys={['1', '2', '3']}
    		onKeyEvent={(key, e) => handleKeyEvent(key)} />

      <h1>Simple Calculator</h1>
      <NumButton />
    </div>
  );
}

export default App;
