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
const cmsOpen = document.querySelector('#cms-open');
const cmsSelect = document.querySelector('#cms-select')



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
    this.addTitle();
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.checkScreensPrice();
    });
    buttonPlus.addEventListener("click", this.addScreenBlock);
    resetBtn.addEventListener("click", this.reset);
    inputRange.addEventListener("input", this.showRange);
    cmsOpen.addEventListener('input', this.cmsOpen);
    cmsSelect.addEventListener('input', this.openControlsInput )
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  checkScreensPrice: function () {
    const typeScreens = document.querySelectorAll(".type-screens");
    const numScreens = document.querySelectorAll(".num-screens");
    const hiddenCmsSelect = document.querySelector('.hidden-cms-variants .main-controls__input');
    const screenValues = [...typeScreens, ...numScreens];
    this.isError = false;
    screenValues.forEach((input) => {
      if (input.value === "") {
        this.isError = true;
      }
    });

    if (!appData.isError) {
      this.start();
      this.blockingElem();
      startBtn.style.display = "none";
      resetBtn.style.display = "block";
    }
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    // appData.logger();
    this.showResult();
  },
  showRange: function () {
    const textSpan = document.querySelector(".range-value");
    textSpan.textContent = inputRange.value + "%";
    appData.rollback = inputRange.value;
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
  },
  blockingElem: function () {
    const typeScreens = document.querySelectorAll(".type-screens");
    const numScreens = document.querySelectorAll(".num-screens");
    const customCheckBox = document.querySelectorAll(".custom-checkbox");
    const inputRange = document.querySelector("input[type=range]");
    const block = [
      ...typeScreens,
      ...numScreens,
      ...customCheckBox,
      inputRange,
    ];
    block.forEach((item) => {
      item.disabled = true;
    });
  },
  reset: function () {
    resetBtn.style.display = "none";
    startBtn.style.display = "block";

    const typeScreens = document.querySelectorAll(".type-screens");
    const numScreens = document.querySelectorAll(".num-screens");
    const check = document.querySelectorAll("input[type=checkbox]");
    const inputText = document.querySelectorAll("input[type=text]");
    const inputRange = document.querySelector("input[type=range]");
    const inputRangeValue = document.querySelector(".range-value");
    const screens = document.querySelectorAll(".screen");
    const hiddenCmsVariants = document.querySelector('.hidden-cms-variants');
    const block = [
      ...typeScreens,
      ...numScreens,
      ...check,
      ...inputText,
      inputRange,
    ];

    block.forEach((item) => {
      item.removeAttribute("disabled");
      if (item.value != "") {
        item.value = "";
      }
      if (item.checked) {
        item.checked = false;
      }
    });

    screens.forEach((item, index) => {
      if (index > 0) {
        screens[index].remove();
      }
    });
    inputRangeValue.textContent = '0%'
    hiddenCmsVariants.style.display = 'none'
  },
  cmsOpen: function() {
    const hiddenCms = document.querySelector('.hidden-cms-variants')
   if(cmsOpen.checked) {
    hiddenCms.style.display = 'flex'
   } else {
    hiddenCms.style.display = 'none'
   }
  },
  openControlsInput: function() {
    const hiddenCmsSelect = document.querySelector('.hidden-cms-variants .main-controls__input')
    if(cmsSelect.value === 'other') {
      hiddenCmsSelect.style.display = 'block'
    } else if(cmsSelect.value === '50') {
      hiddenCmsSelect.style.display = 'none'
    }
  },
  addScreens: function () {
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
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
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
      this.screenCount += +screen.count;
    }
    if(cmsSelect.value === '50') {
      this.screenPrice += this.screenPrice / 2;
    }
    for (let key in appData.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
      this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.screenCount;
  },
  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
};
appData.init();
