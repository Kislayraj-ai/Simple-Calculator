import {
	getElement,
	removeClasses,
	OperationCheck,
	firstContainer,
	secondContainer,
	resultContainer,
	operatorContainer
} from './function.js';

//*first container textcontent
class firstSelector {
	constructor(element) {
		this.container = element;
		this.container.addEventListener('click', (e) => {
			if (secondContainer.textContent == '') {
				firstContainer.style.visibility = 'visible';
				firstContainer.append(e.target.textContent);
				length();
			}
		});
	}
}

//*second container textcontent
class secondSeclector {
	constructor(element) {
		this.container = element;
		this.container.addEventListener('click', (e) => {
			if (firstContainer.textContent != '' && operatorContainer.textContent != '') {
				operatorContainer.classList.add('effectOperator');
				secondContainer.style.visibility = 'visible';
				secondContainer.append(e.target.textContent);
				length();
			}
		});
	}
}
const secondContianerNumbers = new secondSeclector(getElement('.numbers'));
const firstContianerNumbers = new firstSelector(getElement('.numbers'));

//*operation classes for operator
class operatorSelector {
	constructor(element) {
		this.container = element;
		this.container.addEventListener('click', (e) => {
			if (firstContainer.textContent != '' || resultContainer.textContent !== '') {
				firstContainer.classList.add('effectFirst');
				operatorContainer.style.visibility = 'visible';
				operatorContainer.textContent = e.target.textContent;
			}
		});
	}
}

const operators = new operatorSelector(getElement('.operatorSign'));

//**************************************************************/
//*select extra buttons
const performOperation = getElement('#button');
const clear = getElement('.clear');
const back = getElement('.back');

//*Perform result '='

performOperation.addEventListener('click', () => {
	OperationCheck();
});

//* clear the screen
clear.addEventListener('click', () => {
	removeClasses();
	firstContainer.textContent = '';
	firstContainer.style.visibility = 'hidden';
});

//*strict check length
function length() {
	if (firstContainer.textContent.length > 12 || secondContainer.textContent.length > 12) {
		firstContainer.textContent = 'Enter value > 10';
		removeClasses();
	}
}

//* backspace button
back.addEventListener('click', () => {
	if (firstContainer.offsetTop == 71) {
		firstContainer.textContent = firstContainer.textContent.slice(0, -1);
	} else if (secondContainer.offsetTop == 71) {
		secondContainer.textContent = secondContainer.textContent.slice(0, -1);
	} else if (operatorContainer.offsetTop == 71) {
		operatorContainer.textContent = operatorContainer.textContent.slice(0, -1);
	} else if (resultContainer.offsetTop == 71) {
		resultContainer.textContent = resultContainer.textContent.slice(0, -1);
	}
});

//*******END******/
