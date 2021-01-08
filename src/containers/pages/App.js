import React from 'react';
import ButtonHandler from '../organisms/ButtonHandler';
import CalculatorMain from '../organisms/CalculatorMain';
import ColorChanger from '../organisms/ColorChanger';
import Footer from '../organisms/Footer';
import { ContextProvider } from '../../configs/AppContext';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ButtonHandler />
        <ColorChanger />
        <div className="content col">
          <CalculatorMain />
        </div>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
