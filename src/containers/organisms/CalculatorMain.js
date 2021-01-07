import React from 'react';
import NumberBtn from '../../components/atoms/NumberBtn';
import OperatorBtn from '../../components/atoms/OperatorBtn';
import CountBtn from '../../components/atoms/CountBtn';
import HistoryBtn from '../../components/atoms/HistoryBtn';
import Screen from '../../components/atoms/Screen';
import Surface from '../../components/Surface';

export default function CalculatorMain() {
	return (
		<Surface>
      <div className="row row--calc-btn mb">
        <HistoryBtn id="btn-h"/>
        <Screen />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-7" number="7" />
        <NumberBtn id="btn-8" number="8" />
        <NumberBtn id="btn-9" number="9" />
        <OperatorBtn id="btn-div" opr="÷" />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-4" number="4" />
        <NumberBtn id="btn-5" number="5" />
        <NumberBtn id="btn-6" number="6" />
        <OperatorBtn id="btn-mlt" opr="x" />
      </div>
      <div className="row row--calc-btn mb">
        <NumberBtn id="btn-1" number="1" />
        <NumberBtn id="btn-2" number="2" />
        <NumberBtn id="btn-3" number="3" />
        <OperatorBtn id="btn-minus" opr="-" />
      </div>
      <div className="row row--calc-btn">
        <NumberBtn id="btn-c" number="CE" />
        <NumberBtn id="btn-0" number="0" />
        <CountBtn id="btn-enter" />
        <OperatorBtn id="btn-plus" opr="+" />
      </div>
    </Surface>
	);
}