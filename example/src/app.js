

window.Vue = require('vue');


const vueMny = require('../../vue-mny.js');


Vue.use(vueMny,
  {
    locale: 'ru-RU',
    style: "currency",
    currency: 'RUB',
  });

const app = new Vue({
  el: '#app',
  data() {
    return {
      input1: 158,
      symbolPosition: 0,
      testlocale: 'nl-NL',
      teststyle: 'currency',
      testcurrency: 'EUR',
      testcurrencyDisplay: 'code',
    }
  }
});

