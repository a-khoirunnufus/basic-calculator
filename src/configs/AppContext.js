import React, { createContext, useReducer } from 'react';
import { count } from './CountHandler';

export const AppContext = createContext();

const initialState = {
	input: [],
	inputString: '',
	status: {
		maxInput: 'max input reached',
		maxOutput: 'max output reached',
		wrongInput: 'wrong input'
	},
	showResult: false,
	maxInput: false,
	maxOutput: false,
	wrongInput: false
}

function reducer(state, action) {
	let newInputArr = [];
	let newInputString = '';
	let result = 0;

	switch (action.type) {
		case 'INPUT_NUM':
		  newInputArr = state.input;
		  newInputArr.push(action.value);
		  newInputString = newInputArr.join('');
			return {
				...state, 
				input: newInputArr,
				inputString: newInputString
			};

		case 'INPUT_OPR':
			newInputArr = collapse(state.input);
			newInputArr.push(action.value);
			newInputString = newInputArr.join('');
			return {
				...state, 
				input: newInputArr,
				inputString: newInputString
			};

		case 'COUNT':
			newInputArr = collapse(state.input);
			result = count(newInputArr);
			newInputArr.push(action.value);
			newInputArr.push(result);
			newInputString = newInputArr.join('');
			console.log(newInputArr);
			return {
				...state,
				input: newInputArr,
				inputString: newInputString,
				showResult: true
			};
		
		case 'CLEAR_ENTRY':
			newInputArr = state.input;
		  newInputArr.pop();
		  newInputString = newInputArr.join('');
		  return {
				...state, 
				input: newInputArr,
				inputString: newInputString
			};

		case 'ALL_CLEAR':
			return {
				...state,
				input: [],
				inputString: '',
				showResult: false
			};

		case 'MAX_INPUT':
			return {
				...state,
				maxInput: action.value
			}

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
		inputString: state.inputString,
		showResult: state.showResult,
		status: state.status,
		maxInput: state.maxInput,
		maxOutput: state.maxOutput,
		wrongInput: state.wrongInput,
		InputNum: value => dispatch({ type: 'INPUT_NUM', value: value }),
		InputOpr: value => dispatch({ type: 'INPUT_OPR', value: value }),
		Count: value => dispatch({ type: 'COUNT', value: value }),
		ClearEntry: () => dispatch({ type: 'CLEAR_ENTRY' }),
		AllClear: () => dispatch({ type: 'ALL_CLEAR' }),
		MaxInput: (value) => dispatch({ type: 'MAX_INPUT', value: value})
	}

	return (
		<AppContext.Provider value={store}>
			{children}
		</AppContext.Provider>
	);

} 