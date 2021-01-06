import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import NumberBtn from '../../components/atoms/NumberBtn';
import OperatorBtn from '../../components/atoms/OperatorBtn';
import CountBtn from '../../components/atoms/CountBtn';
import HistoryBtn from '../../components/atoms/HistoryBtn';
import Screen from '../../components/atoms/Screen';
import Surface from '../organisms/Surface';

function App() {
	const handleKeyEvent = (key) => {
		console.log(`${key} pressed!`);
		document.querySelector(".btn--number").classList.add("btn-click");
		setTimeout(() => {
			document.querySelector(".btn--number").classList.remove("btn-click");
		}, 100);
	};

  return (
    <div className="App">
      <KeyboardEventHandler
    		handleKeys={['1','2','3','4','5','6','7','8','9','0',',','.','+','-','*','/','=','c']}
    		onKeyEvent={(key, e) => handleKeyEvent(key)} />

      <h1>Simple Calculator</h1>
      <Surface>
        <div className="row row--calc-btn mb">
          <HistoryBtn />
          <Screen />
        </div>
        <div className="row row--calc-btn mb">
          <NumberBtn number="7" />
          <NumberBtn number="8" />
          <NumberBtn number="9" />
          <OperatorBtn opr="÷" />
        </div>
        <div className="row row--calc-btn mb">
          <NumberBtn number="4" />
          <NumberBtn number="5" />
          <NumberBtn number="6" />
          <OperatorBtn opr="x" />
        </div>
        <div className="row row--calc-btn mb">
          <NumberBtn number="1" />
          <NumberBtn number="2" />
          <NumberBtn number="3" />
          <OperatorBtn opr="-" />
        </div>
        <div className="row row--calc-btn">
          <NumberBtn number="CE" />
          <NumberBtn number="0" />
          <CountBtn />
          <OperatorBtn opr="+" />
        </div>
      </Surface>
    </div>
  );
}

export default App;
