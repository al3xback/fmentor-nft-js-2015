const cardEl = document.querySelector('.card');

/* Keyword let, const */
const imagePath = './images/equilibrium.jpg';
const imageAlt = 'Equilibrium';
let imageWidth;
let imageHeight;
imageWidth = 302;
imageHeight = 302;

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.src = imagePath;
cardImageEl.width = imageWidth;
cardImageEl.height = imageHeight;
cardImageEl.alt = imageAlt;

/* Arrow function */
const getTitleId = () => {
	return 3429;
};

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = '#' + getTitleId();

/* Object destructuring */
const description = {
	firstPart: 'Our Equilibrium collection',
	secondPart: 'promotes',
	thirdPart: 'balance and calm',
};
const { firstPart, secondPart, thirdPart } = description;

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = `${firstPart} ${secondPart} ${thirdPart}.`;

/* Array destructuring */
const statusItems = ['0.041 ETH', '3 days left'];
const [ethereumAmount, remainingTime] = statusItems;

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('span').textContent = ethereumAmount;
cardStatusItemEls[1].querySelector('span').textContent = remainingTime;

/* Spread (...) operator */
const authorImageSizes = [33, 33];
const authorImage = [
	'./images/avatar.png',
	...authorImageSizes,
	'Jules Wyvern',
];

const cardAuthorImageEl = cardEl.querySelector('.card__author-img');
cardAuthorImageEl.src = authorImage[0];
cardAuthorImageEl.width = authorImage[1];
cardAuthorImageEl.height = authorImage[2];
cardAuthorImageEl.alt = authorImage[3];
