//*arrow function to select elements
const getElement = (select) => {
	const element = document.querySelector(select);
	if (element) return element;
	throw new Error`Please check ${select} selector`();
};
//* elements selected here
const firstContainer = getElement('#first');
const secondContainer = getElement('#second');
const operatorContainer = getElement('#operator');
const resultContainer = getElement('#result');

//* funnction to remove classes
function removeClasses() {
	firstContainer.classList.remove('effectFirst');
	secondContainer.textContent = '';
	secondContainer.style.visibility = 'hidden';
	secondContainer.classList.remove('effectSecond');

	operatorContainer.textContent = '';
	operatorContainer.style.visibility = 'hidden';
	operatorContainer.classList.remove('effectOperator');

	resultContainer.textContent = '';
	resultContainer.style.visibility = 'hidden';
}

//* function for operatons to perform
function OperationCheck() {
	secondContainer.classList.add('effectSecond');
	resultContainer.style.visibility = 'visible';
	if (operatorContainer.textContent == '+') {
		resultContainer.textContent = parseInt(firstContainer.textContent) + parseInt(secondContainer.textContent);
	} else if (operatorContainer.textContent == '-') {
		resultContainer.textContent = parseInt(firstContainer.textContent) - parseInt(secondContainer.textContent);
	} else if (operatorContainer.textContent == '/') {
		resultContainer.textContent = parseInt(firstContainer.textContent) / parseInt(secondContainer.textContent);
	} else if (operatorContainer.textContent == '*') {
		resultContainer.textContent = parseInt(firstContainer.textContent) * parseInt(secondContainer.textContent);
	}
}

export {
	getElement,
	removeClasses,
	OperationCheck,
	firstContainer,
	secondContainer,
	resultContainer,
	operatorContainer
};
