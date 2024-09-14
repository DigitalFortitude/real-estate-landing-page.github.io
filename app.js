const hambergerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

const nav = document.querySelector('.nav__link');

let bodyEl = document.querySelector('body');

hambergerBtn.addEventListener('click', function () {
	nav.style.transform = 'scale(1)';
	bodyEl.classList.add('overlay');
});

closeBtn.addEventListener('click', function () {
	nav.style.transform = 'scale(0)';
	bodyEl.classList.remove('overlay');
});


const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');
const imgList = document.querySelector('.list');

const nextTwoBtn = document.querySelector('.right__two');
const prevTwoBtn = document.querySelector('.left__two');
const imgListTwo = document.querySelector('.list__two');


nextBtn.addEventListener('click', function () {
	const currentImg = document.querySelector('.current');
	console.log(currentImg);
	const prevImg = currentImg.previousElementSibling;
	const firstEl = imgList.firstElementChild;
	moveRight(currentImg, prevImg, firstEl, 'current');
});

nextTwoBtn.addEventListener('click', function () {
	const currentImg = document.querySelector('.current__two');
	console.log(currentImg);
	const prevImg = currentImg.previousElementSibling;
	const firstEl = imgListTwo.firstElementChild;

	moveRight(currentImg, prevImg, firstEl, 'current__two');
});

function moveRight(currentImg, targetImag, firstEl, classIs) {
	if (targetImag) {
		currentImg.style.transform = 'translateX(-200rem)';
		currentImg.classList.remove(classIs);
		targetImag.classList.add(classIs);
	} else {
		currentImg.style.transform = 'translate(0)';
		currentImg.classList.remove(classIs);
		firstEl.classList.add(classIs);
	}
}

prevBtn.addEventListener('click', function () {
	const currentImg = document.querySelector('.current');
	const nextImg = currentImg.nextElementSibling;
	const lastEl = imgList.lastElementChild;

	moveLeft(currentImg, nextImg, lastEl, 'current');
});

prevTwoBtn.addEventListener('click', function() {
	const currentImg = document.querySelector('.current__two');
	const nextImg = currentImg.nextElementSibling;
	const lastEl = imgListTwo.lastElementChild;
	moveLeft(currentImg, nextImg, lastEl, 'current__two');
})


function moveLeft(currentImg, targetImag, lastEl, classIs) {
	if (targetImag) {
		currentImg.style.transform = 'translateX(0)';
		currentImg.classList.remove(classIs);
		targetImag.classList.add(classIs);
	} else {
		currentImg.style.transform = 'translateX(0)';
		currentImg.classList.remove(classIs);
		lastEl.classList.add(classIs);
	}
}