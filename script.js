'use strict';

//lesson03
let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 24;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};


const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор вёрскти');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа ?');
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        }

        let checkSum;
        while (!isNumber(checkSum)) {
            checkSum = prompt('Сколько это будет стоить?');
            sum += Number(checkSum);
        }
    }
    return sum;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    return (title[0] != ' ') ? title[0].toUpperCase() + title.slice(1) :
        console.log(title[1].toUpperCase() + title.slice(2));
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));

console.log(screens);