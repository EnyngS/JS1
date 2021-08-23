'use strict'
// console.log('ну привет')
// let YourEye = 'blue';
// let user;
// let userName = 'Вася';
// user = userName;
// console.log(user);
// console.log(YourEye);
// let num = 10 / 0;
// console.log(num);
// let ban;
// console.log(typeof ban);
// let st = '10' / '1';
// console.log(typeof st);
// let num1 = '10' + 2;
// console.log(num1);
// let c = 0;
// let x = 2 * ++c;
// console.log(x)
// console.log(2 * ++c);
// console.log(c);
// console.log('12' > 11);
// console.log('ac' || true);
// console.log(!true && 2 || 11 && 1);
// console.log('3' + '7');
// // console.log('333' > 7++);
// let b = 0;
// let n = ++b;
// console.log(n);
// console.log(n);
// console.log(!false && 11 || 18 && !'');
// let p = 0;
// console.log(p ?? 11)
// console.log(!0)
// let m = (92 > '11' && 58 < 100) ? 'yes' : 'no'
// console.log(m);
// if (0) { console.log('no'); }
// else if ('') { console.log('yes') }
// else { console.log('пошел нах') }
// // alert('ПРивет, педрила')
// let z = 5;
// while (z) {
// 	console.log(z);
// 	z--;

// }
// for (let q = 0; q < 5; q++) {
// 	console.log(q);


// }
// console.log(Boolean(0));
// let name = 'you';
// // alert(`hello ${name}`);
// let result =
// 	prompt('Who are you?', []);
// if (result == 'Vlad') {
// 	alert(`you God`)
// }
// if (result == 'Nastya') {
// 	alert(`you Queen`)
// }
// else { alert(`you EMPTY!!`) }
// for (result == 'Vlad'; result == 'Nastya') {alert(`you Queen`)
// }
// else { alert(`you EMPTY!!`) }
// let showM
// if (2 > 1) {
// 	showM = function () { console.log('aaaaaaaaaa') }
// }
// showM();

// if (2 > 1) {
// 	function showN() { console.log('Fafaaaaaaaa') }
// 	showN();
// }
// let upp = "Привет!";
// console.log(upp[1]);
// console.log(upp.length);
// console.log(upp.toLowerCase());
// console.log(upp.slice(1, 5));
// console.log(upp.search('ве'));
// console.log(upp.indexOf('ве', 1));
// console.log(upp.includes('!', -2));
// console.log(upp.startsWith('р'));
// console.log('1');
let t = prompt('Проверь, является ли число квадратным');
let n = +t;
var isSquare = function () {
	// let age = prompt('число квадратное?');
	for (let a = 0; a <= n; ++a) {
		if (a * a == n) {
			return alert('Да!');
			// break;
		}
		if (a == n) {
			return alert('Нет!');;
			// break;
		}
	}
}
isSquare()





