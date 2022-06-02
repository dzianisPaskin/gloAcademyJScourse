'use strict';

//lesson03
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа ?', '1200');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 24;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

if (fullPrice >= 30000) console.log('Даём скидку в 10%');
if (fullPrice >= 15000) console.log('Даём скидку в 5%');
if (fullPrice < 15000 && fullPrice > 0) console.log('Скидка не предусмотрена');
if (fullPrice <= 0) console.log('Что то пошло не так');

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log(`Стоимость вёрстки экранов ${screenPrice} рублей/ долларова/ гривен/ юаней`);
