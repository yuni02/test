(function () {
	'use strict';

	const type = o => Object.prototype.toString.call(o).slice(8, -1).toLowerCase();

	type(Symbol('type checker'));

}());
