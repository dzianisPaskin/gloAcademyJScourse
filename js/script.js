"use strict";
const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
const screens = document.querySelectorAll(".screen");
// const screensWrapper = document.querySelector(".main-controls__views");

const appData = {
  title: "",
  screens: [],
  screenCount: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  services: {},
  init: function () {
    // startBtn.disabled = true;
    appData.addTitle();
    startBtn.addEventListener("click", (e) => {
      e.preventDefault(); //отменяем стандартное поведение 

      appData.checkScreensPrice();
    });
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    // screensWrapper.addEventListener("change", appData.checkScreensPrice);
    inputRange.addEventListener("input", appData.showRange);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrices();
    // appData.logger();
    console.log(appData);
    appData.showResult();
  },
  showRange: function () {
    const textSpan = document.querySelector(".range-value");
    textSpan.textContent = inputRange.value + "%";
    appData.rollback = inputRange.value;
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },
  checkScreensPrice: function () {
    const typeScreens = document.querySelectorAll(".type-screens"); //получаем все input, прежде присвоил класс
    const numScreens = document.querySelectorAll(".num-screens"); ///получаем все select, прежде присвоил класс
    const screenValues = [...typeScreens,...numScreens];//с помощью rest сохраняем все элементы input и select в один массив
    appData.isError = false;
    screenValues.forEach((input) => {
      if(input.value === '') {
        appData.isError = true;
      }
    });
    
    if(!appData.isError) {
      appData.start();

    }

    // let disabled = false;
    // screens.forEach(function (screen) {
    //   const select = screen.querySelector("select").value;
    //   const input = screen.querySelector("input").value;
    //   if (!select || !input) {
    //     disabled = true;
    //   }
    // });

    // startBtn.disabled = disabled;
  },
  addScreens: function () {
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    // startBtn.disabled = true;
    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
      appData.screenCount += +screen.count;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    totalCountRollback.value = appData.servicePercentPrice;
    totalCount.value = appData.screenCount;
  },
  // getServicePercentPrices: function () {
  //   appData.servicePercentPrice =
  //     appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  // },
  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};
appData.init();
