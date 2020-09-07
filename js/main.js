console.log('hola mundo');

const buttonShare = document.querySelector('.buttonShare');
const buttonAuthor = document.querySelector('.buttonAuthor');
const cardAuthor = document.querySelector('.cardAuthor');
const cardShare = document.querySelector('.cardShare');

const showMenuShare = (ev) => {
  cardAuthor.classList.add('hidden');
  cardShare.classList.remove('hidden');
};

const showMenuAuthor = (ev) => {
  cardShare.classList.add('hidden');
  cardAuthor.classList.remove('hidden');
};

buttonAuthor.addEventListener('click', showMenuShare);
buttonShare.addEventListener('click', showMenuAuthor);
