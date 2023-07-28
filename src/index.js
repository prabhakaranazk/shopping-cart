import faker from 'faker';

const cartString = `<div> You have ${faker.random.number(10, 50)} items in the cart</div>`;

document.querySelector('#cart-list').innerHTML = cartString;

