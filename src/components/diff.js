import {clean} from './utilities.js';
import {compare} from './dom.js';

function diff (el, fn) {

	// Get the target element
	let elem = typeof el === 'string' ? document.querySelector(el) : el;
	if (!elem) throw `Element not found: ${el}`;

	// Render the content
	return function () {
		compare(clean(fn(), true), elem);
	};

}

export {diff};