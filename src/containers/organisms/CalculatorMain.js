import React, { useContext, useEffect, useState } from 'react';
import NumberBtn from '../../components/NumberBtn';
import OperatorBtn from '../../components/OperatorBtn';
import CountBtn from '../../components/CountBtn';
import ClearEntryBtn from '../../components/ClearEntryBtn';
import AllClearBtn from '../../components/AllClearBtn';
import Screen from '../../components/Screen';
import Surface from '../../components/Surface';
import { AppContext } from '../../configs/AppContext';

export default function CalculatorMain() {
  const {
    inputString,
    status,
    showResult,
    operationStatus,
    maxInput,
    maxOutput,
    wrongInput,
    InputNum, 
    InputOpr,
    Count, 
    ClearEntry, 
    AllClear
  } = useContext(AppContext);
  const [statusText, setStatusText] = useState('');

  const handleInputNum = value => {
    if (!maxInput) InputNum(value);
  };
  const handleInputOpr = value => {
    if (!maxInput) InputOpr(value);
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

  useEffect(() => {
    console.log('use effect jalan');
    if(maxInput) setStatusText(status.maxInput);
    if(maxOutput) setStatusText(status.maxOutput);
    if(wrongInput) setStatusText(status.wrongInput);
    if(!(maxInput || maxOutput || wrongInput)) {
      document.querySelector('.screen--status').classList.remove('f-red');
      document.querySelector('.screen--status').classList.add('f-grey');
      setStatusText(operationStatus);
    } else {
      document.querySelector('.screen--status').classList.remove('f-grey');
      document.querySelector('.screen--status').classList.add('f-red');
    }
  }, [maxInput, maxOutput, wrongInput, operationStatus])

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