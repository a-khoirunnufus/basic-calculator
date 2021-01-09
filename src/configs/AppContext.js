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
	operationStatus: '',
	showResult: false,
	maxInput: false,
	maxOutput: false,
	wrongInput: false
}

function reducer(state, action) {
	let newInputArr = [];
	let newInputString = '';
	let newMaxInput = false;
	let newMaxOutput = false;
	let newWrongInput = false;
	let newOperationStatus = '';
	let result = 0;
	let re = /^\d+(\s*[-*+/]\s*\d+)+$/;

	switch (action.type) {
		case 'INPUT_NUM':
		  newInputArr = state.input;
		  newInputArr.push(action.value);
		  newInputString = newInputArr.join('');
		  if (newInputString.length > 13) {
		  	newMaxInput = true;
		  }
			return {
				...state, 
				input: newInputArr,
				inputString: newInputString,
				maxInput: newMaxInput
			};

		case 'INPUT_OPR':
			newInputArr = collapse(state.input);
			newInputArr.push(action.value);
			newInputString = newInputArr.join('');
			if (newInputString.length > 13) {
		  	newMaxInput = true;
		  }
			return {
				...state, 
				input: newInputArr,
				inputString: newInputString,
				maxInput: newMaxInput
			};

		case 'COUNT':
			newInputArr = collapse(state.input);

			// syntax validation
			newInputString = newInputArr.join('');
			newWrongInput = !re.test(newInputString);
			if (newWrongInput) {
			  return {
			  	...state,
			  	input: newInputArr,
			  	inputString: newInputString,
			  	wrongInput: newWrongInput
			  }
			}

			// max output validation
			result = count(newInputArr);
			if (result.toString().length > 14) {
				newMaxInput = true;
				return {
			  	...state,
			  	input: newInputArr,
			  	inputString: newInputString,
			  	wrongInput: newWrongInput,
			  	maxOutput: newMaxInput,
			  }
			} else {
				newMaxInput = false;
			}

			newInputArr.push(action.value);
			newOperationStatus = newInputArr.join('');
			newInputArr = [result];
			newInputString = result.toString();

			return {
				...state,
				input: newInputArr,
				inputString: newInputString,
				operationStatus: newOperationStatus,
				showResult: true,
				wrongInput: newWrongInput,
				maxInput: false,
				maxOutput: newMaxOutput
			};
		
		case 'CLEAR_ENTRY':
			newInputArr = state.input;
		  newInputArr.pop();
		  newInputString = newInputArr.join('');
		  return {
				...state, 
				input: newInputArr,
				inputString: newInputString,
				maxInput: false,
				maxOutput: false,
				wrongInput: false
			};

		case 'ALL_CLEAR':
			return {
				...state,
				input: [],
				inputString: '',
				showResult: false,
				operationStatus: '',
				maxInput: false,
				maxOutput: false,
				wrongInput: false
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
		operationStatus: state.operationStatus,
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