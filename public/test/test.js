const images = document.querySelectorAll('.img');
const left = document.querySelector('.btn-left');
const right = document.querySelector('.btn-right');

right.addEventListener('click', () => {
	const activeImg = document.querySelector('.active');
	const activeImgNo = activeImg.classList[1].split('-')[1];
	const nextImg = document.querySelector(`.img-${activeImgNo * 1 + 1}`);
	console.log(activeImg);
	if (activeImgNo < images.length) {
		activeImg.classList.remove('active');
		nextImg.classList.add('active');
	}
});

left.addEventListener('click', () => {
	const activeImg = document.querySelector('.active');
	const activeImgNo = activeImg.classList[1].split('-')[1];
	const prevImg = document.querySelector(`.img-${activeImgNo * 1 - 1}`);
	console.log(prevImg);

	if (activeImgNo > 1) {
		activeImg.classList.remove('active');
		prevImg.classList.add('active');
	}
});

console.log(images);
