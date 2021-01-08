import React, { createContext, useReducer } from 'react';
import { count } from './CountHandler';

export const AppContext = createContext();

const initialState = {
	input: [],
	showResult: false
}

function reducer(state, action) {
	let newInputArr = [];
	let result = 0;

	switch (action.type) {
		case 'INPUT_NUM':
		  newInputArr = state.input;
		  newInputArr.push(action.value);
			return {...state, input: newInputArr};

		case 'INPUT_OPR':
			newInputArr = collapse(state.input);
			newInputArr.push(action.value);
			return {...state, input: newInputArr};

		case 'COUNT':
			newInputArr = collapse(state.input);
			result = count(newInputArr);
			newInputArr.push(action.value);
			newInputArr.push(result);
			console.log(newInputArr);
			return {input: newInputArr, showResult: true};
		
		case 'CLEAR_ENTRY':
			newInputArr = state.input;
		  newInputArr.pop();
		  return {...state, input: newInputArr};

		case 'ALL_CLEAR':
			return {
				input: [],
				showResult: false
			};

		default:
		  return state;
	}
}

// reducer subfunction
function collapse(input) {
	let newInputArr = input;
	let length = newInputArr.length;
	
	if ( length > 0 ) {
		let newNum = '';
		let i = length-1;

		while ( !['+','-','*','/'].includes(newInputArr[i]) && i >= 0 ) {
			newNum = newInputArr.pop() + newNum;
			i--;
		}

		newNum = parseInt(newNum);
		newInputArr.push(newNum);
	}

	return newInputArr;
}

export function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const store = {
		input: state.input,
		showResult: state.showResult,
		InputNum: value => dispatch({ type: 'INPUT_NUM', value: value }),
		InputOpr: value => dispatch({ type: 'INPUT_OPR', value: value }),
		Count: value => dispatch({ type: 'COUNT', value: value }),
		ClearEntry: () => dispatch({ type: 'CLEAR_ENTRY' }),
		AllClear: () => dispatch({ type: 'ALL_CLEAR' })
	}

	return (
		<AppContext.Provider value={store}>
			{children}
		</AppContext.Provider>
	);

} 