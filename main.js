let t = prompt('Проверь, является ли число квадратным');
let n = +t;
// if (Number.isInteger(n)) { alert('Введи число') };
var isSquare = function () {
	// let age = prompt('число квадратное?');
	if (Number.isInteger(n)) {

		for (let a = 0; a <= n; ++a) {
			if (a * a == n) {
				let yes = alert('Да!');
				return yes;
				// break;
			}
			if (a == n) {
				let yes = alert('Нет!');
				return no;
				// break;
			}
		}

	}

	else { alert('Введи число') }


}
isSquare();