import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import CalculatorMain from '../organisms/CalculatorMain';
import CalculatorHistory from '../organisms/CalculatorHistory';
import ColorChanger from '../organisms/ColorChanger';
import Footer from '../organisms/Footer';

function App() {
  const addButtonShadowOpr = (id) => {
    if(id === 'shift+=' || id === '+') return 'plus';
    if(id === '-') return 'minus';
    if(id === 'shift+8' || id === '*') return 'mlt';
    if(id === '/') return 'div';
    return '';
  };
  const addButtonShadow = (id) => {
    let btnId = id;
    if(['shift+=','+','-','shift+8','*','/'].includes(id)) {
      btnId = addButtonShadowOpr(id);
    }
    document.querySelector(`#btn-${btnId}`).classList.add("btn-click");
    setTimeout(() => {
      document.querySelector(`#btn-${btnId}`).classList.remove("btn-click");
    }, 100);
  };
	const handleKeyEvent = (key) => {
		console.log(`${key} pressed!`);
    addButtonShadow(key);
	};

  return (
    <div className="App">
      <KeyboardEventHandler
    		handleKeys={['1','2','3','4','5','6','7','8','9','0',',','.','shift+=','+','-','shift+8','*','/','c','enter','h','r','o','g','b','d']}
    		onKeyEvent={(key, e) => handleKeyEvent(key)} 
      />

      <ColorChanger />

      <div className="content col">
        <div className="mb">
          <CalculatorHistory />
        </div>
        <CalculatorMain />
      </div>

      <Footer />
    </div>
  );
}

export default App;
