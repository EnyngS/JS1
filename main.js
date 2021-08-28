// let t = prompt('Проверь, является ли число квадратным');
// let n = +t;
// // if (Number.isInteger(n)) { alert('Введи число') };
// var isSquare = function () {
// 	// let age = prompt('число квадратное?');
// 	if (Number.isInteger(n)) {

// 		for (let a = 0; a <= n; ++a) {
// 			if (a * a == n) {
// 				let yes = alert('Да!');
// 				return yes;
// 				// break;
// 			}
// 			if (a == n) {
// 				let yes = alert('Нет!');
// 				return no;
// 				// break;
// 			}
// 		}

// 	}

// 	else {
// 		alert('Введи число');
// 		// continue isSquare()
// 	}


// }
// isSquare()
// repeat(isSquare(), 3);
// if (alert()) { isSquare(); }
const button = document.querySelector('button');
const content = document.querySelector('.content');
button.addEventListener('click', function () {
	if (content.classList.toggle('content-hidden'))
		button.textContent = 'Открыть';
	else button.textContent = 'Закрыть';
	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
})
// -------------------

const accTitle = document.querySelectorAll('.accordeon__title');
const accBoxes = document.querySelectorAll('.accordeon__content');

accTitle.forEach(function (item) {
	item.addEventListener('click', function () {

		accBoxes.forEach(function (item) {

			item.style.maxHeight = null;

		})


		const nextEl = this.nextElementSibling;


		if (nextEl.style.maxHeight) {
			nextEl.style.maxHeight = null;
		} else {
			nextEl.style.maxHeight = nextEl.scrollHeight + "px";
		}

	})

})

// -------------------------
const tabTitle = document.querySelectorAll('.tab__title');
const tabBoxes = document.querySelectorAll('.tab__content');

tabTitle.forEach(function (item) {
	item.addEventListener('click', watchTab)
})

function watchTab() {
	tabBoxes.forEach(function (item) {
		item.classList.add('tab__hidden')
	})

	const tabBox = document.querySelector('#' + this.dataset.tab);
	tabBox.classList.remove('tab__hidden')

}
// --------------------------------

const modalBtn = document.querySelector('.modal__btn');
const modalBox = document.querySelector('.modal__box');
const modalClose1 = document.querySelector('.modal__close');
const modalClose2 = document.querySelector('.modal__content');

modalBtn.addEventListener('click', function () {
	modalBox.classList.remove('modal__hidden')
})
modalClose1.addEventListener('click', function () {
	modalBox.classList.add('modal__hidden')
})
modalBox.addEventListener('click', function () {
	modalBox.classList.add('modal__hidden');

})
modalClose2.addEventListener('click', function (e) {
	e.stopPropagation();
})

// -----------------------------------

const modalsBtn = document.querySelectorAll('[data-modals]');
const modalsBox = document.querySelectorAll('[data-box]');
const modalsClose1 = document.querySelectorAll('[data-modals-close]');


modalsBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		const modal = document.querySelector('#' + this.dataset.modals);
		modal.classList.remove('modals__hidden');


	})
})
modalsClose1.forEach(function (item) {
	item.addEventListener('click', function () {
		this.closest('[data-box]').classList.add('modals__hidden');

	})

})
modalsBox.forEach(function (item) {
	item.addEventListener('click', function () {
		this.classList.add('modals__hidden');

	})
	item.querySelector('.modals__content').addEventListener('click', function (e) {
		e.stopPropagation();
	});


})



// modalClose1.addEventListener('click', function () {
// 	modalBox.classList.add('modal__hidden')
// })
// modalBox.addEventListener('click', function () {
// 	modalBox.classList.add('modal__hidden');

// })
// modalClose2.addEventListener('click', function (e) {
// 	e.stopPropagation();
// })
