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
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
let allServicePrices;


const getAllServicePrices = function () {
    allServicePrices = servicePrice1 + servicePrice2;
    return allServicePrices;
};

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices;
    return fullPrice;
}

const getTitle = function() {
   return (title[0] != ' ') ? title[0].toUpperCase() + title.slice(1) :
                       console.log(title[1].toUpperCase() + title.slice(2));
};

const getServicePercentPrices = function() {
    servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
    return servicePercentPrice;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) return 'Даём скидку в 10%';
    if (price >= 15000) return 'Даём скидку в 5%';
    if (price < 15000 && price > 0) return 'Скидка не предусмотрена';
    if (price <= 0) return 'Что то пошло не так';
};

getServicePercentPrices();
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));

console.log(screens);

