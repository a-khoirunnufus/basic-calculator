import React, { useContext, useEffect, useState } from 'react';
import NumberBtn from '../../components/atoms/NumberBtn';
import OperatorBtn from '../../components/atoms/OperatorBtn';
import CountBtn from '../../components/atoms/CountBtn';
import ClearEntryBtn from '../../components/atoms/ClearEntryBtn';
import AllClearBtn from '../../components/atoms/AllClearBtn';
import Screen from '../../components/atoms/Screen';
import Surface from '../../components/Surface';
import { AppContext } from '../../configs/AppContext';

export default function CalculatorMain() {
  const { 
    input, 
    inputString,
    status,
    showResult,
    maxInput,
    maxOutput,
    wrongInput,
    InputNum, 
    InputOpr,
    Count, 
    ClearEntry, 
    AllClear, 
    MaxInput 
  } = useContext(AppContext);
  const [statusText, setStatusText] = useState('');

  const handleInputNum = value => {
    InputNum(value);
  };
  const handleInputOpr = value => {
    InputOpr(value);
  };
  const handleCount = value => {
    Count(value);
  }
  const handleCE = () => {
    ClearEntry();
  }
  const handleAC = () => {
    AllClear();
  }
  const handleMaxInput = (bool) => {
    MaxInput(bool);
  }

  useEffect(() => {
    if(maxInput) setStatusText(status.maxInput);
    if(maxOutput) setStatusText(status.maxOutput);
    if(wrongInput) setStatusText(status.wrongInput);
    if(!(maxInput || maxOutput || wrongInput)) setStatusText('');
  }, [maxInput, maxOutput, wrongInput])

  useEffect(() => {
    console.log('use effect jalan');
    // input validation
    if(inputString.length > 13) {
      console.log('max input reached');
      handleMaxInput(true);
    } else {
      handleMaxInput(false);
    }
  }, [inputString])

	return (
		<Surface>
      <div className="row row--calc-btn mb">
        <Screen value={inputString} statusText={statusText} />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-7" number='7' handleInput={handleInputNum} />
        <NumberBtn id="btn-8" number='8' handleInput={handleInputNum} />
        <NumberBtn id="btn-9" number='9' handleInput={handleInputNum} />
        <OperatorBtn id="btn-div" opr="/" handleInput={handleInputOpr} />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-4" number='4' handleInput={handleInputNum} />
        <NumberBtn id="btn-5" number='5' handleInput={handleInputNum} />
        <NumberBtn id="btn-6" number='6' handleInput={handleInputNum} />
        <OperatorBtn id="btn-mlt" opr="*" handleInput={handleInputOpr} />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-1" number='1' handleInput={handleInputNum} />
        <NumberBtn id="btn-2" number='2' handleInput={handleInputNum} />
        <NumberBtn id="btn-3" number='3' handleInput={handleInputNum} />
        <OperatorBtn id="btn-minus" opr="-" handleInput={handleInputOpr} />
      </div>
      <div className="row row--calc-btn">
        {
          showResult ?
          <AllClearBtn id="btn-all-clear" handleAC={handleAC} /> :
          <ClearEntryBtn id="btn-clear-entry" handleCE={handleCE} />
          
        }
        <NumberBtn id="btn-0" number='0' handleInput={handleInputNum} />
        <CountBtn id="btn-enter" handleCount={handleCount} />
        <OperatorBtn id="btn-plus" opr="+" handleInput={handleInputOpr} />
      </div>
    </Surface>
	);
}