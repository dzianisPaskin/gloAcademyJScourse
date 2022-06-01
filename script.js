
//lesson02
let title = 'my project', 
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 100,
    rollback = 44,
    fullPrice = 2000, 
    adaptive = true;


    // console.log(typeof title);
    // console.log(typeof fullPrice);
    // console.log(typeof adaptive);
    // console.log(screens.length);
    // console.log(`Стоимость вёрстки экранов ${screenPrice}$`);
    // console.log(`Стоимость разработки сайтов ${fullPrice}$`);
    // console.log(screens.toLowerCase().split(', '));
    // console.log(fullPrice * (rollback / 100));



 //lesson03
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    screenPrice = +prompt('Сколько будет стоить данная работа ?', '1200');
    adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
    fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

console.log(servicePercentPrice);

if (fullPrice >= 30000) console.log('Даём скидку в 10%');
if (fullPrice >= 15000) console.log('Даём скидку в 5%');
if (fullPrice < 15000 && fullPrice > 0) console.log('Скидка не предусмотрена');
if (fullPrice <= 0) console.log('Что то пошло не так');