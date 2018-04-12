const Vue = require('vue');
const vueMny = require('../vue-mny.js');

Vue.use(vueMny);

   
const app = new Vue({
    el: '#vue',
    data() {
        return {
            moneyVariable: 59392.573,
            discountVariable: 20,
        }
    }
});

// to compile:    browserify index.js -o build.js

