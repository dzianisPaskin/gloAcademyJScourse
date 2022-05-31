let title = 'my project', 
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 100,
    rollback = 44,
    fullPrice = 2000, 
    adaptive = true;


    console.log(typeof title);
    console.log(typeof fullPrice);
    console.log(typeof adaptive);
    console.log(screens.length);
    console.log(`Стоимость вёрстки экранов ${screenPrice}$`);
    console.log(`Стоимость разработки сайтов ${fullPrice}$`);
    console.log(screens.toLowerCase().split(', '));
    console.log(fullPrice * (rollback / 100));

// alert('Hi');
// console.log('hello');