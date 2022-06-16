const book = document.querySelectorAll('.book');
const image = document.querySelector('body');
const text = book[4].querySelector('h2 > a');
const adv = document.querySelector('.adv');
const orderLi_1 = book[0].querySelectorAll('ul > li');
const orderLi_2 = book[5].querySelectorAll('ul > li');
const new_li = book[2].querySelectorAll('ul > li');




book[1].insertAdjacentElement('afterend', book[0]);
image.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
text.textContent = 'Книга 3. this и Протопипы Объектов';
adv.remove();
 orderLi_1[9].append(orderLi_1[2]);
 orderLi_1[3].append(orderLi_1[6]);
 orderLi_1[6].append(orderLi_1[8]);
 orderLi_2[1].append(orderLi_2[9]);
 orderLi_2[9].append(orderLi_2[3]);
 orderLi_2[3].append(orderLi_2[4]);
 orderLi_2[7].append(orderLi_2[5]);
new_li[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
