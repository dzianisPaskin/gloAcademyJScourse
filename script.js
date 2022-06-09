'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 24,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },

    logger: function () {
        for (const prop in appData) {
            console.log(prop);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрскти');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа ?');
        }
        while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            }

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            sum += +price;
        }
        return sum;
    },

    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },

    getTitle: function () {
        return (appData.title[0] != ' ') ? appData.title[0].toUpperCase() + appData.title.slice(1) :
            console.log(appData.title[1].toUpperCase() + appData.title.slice(2));
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) return 'Даём скидку в 10%';
        if (price >= 15000) return 'Даём скидку в 5%';
        if (price < 15000 && price > 0) return 'Скидка не предусмотрена';
        if (price <= 0) return 'Что то пошло не так';
    }

};


appData.start();