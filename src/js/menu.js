import refs from './refs.js';

const Handlebars = require("handlebars");



import menuTemplate from '../templates/menu-list.hbs';
// console.log(menuTemplate);
import cards from '../menu.json';

const template = Handlebars.compile(menuTemplate);

const cardsMarkup = createCardsListMarkup(cards);

refs.menulistRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsListMarkup(cards) {
    //  return cards.map(card=>menuTemplate(card)).join('');
    return cards.map(template).join('');
}




// 2 способ(шаблон для всех элементов сразу)
// const cardsMarkup2 = menuTemplate(cards);
// menulistRef.insertAdjacentHTML('beforeend', cardsMarkup2);

