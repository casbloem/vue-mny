# vue-mny
Currency formatting for all currencies, and all languages. As a simple Vue plugin.


[![GitHub last commit](https://img.shields.io/github/last-commit/casbloem/vue-mny.svg)](#)
[![GitHub version](https://img.shields.io/github/package-json/v/casbloem/vue-mny.svg)](https://github.com/casbloem/vue-mny)


[![npm version](https://img.shields.io/npm/v/vue-mny.svg)](https://npmjs.com/package/vue-mny)
[![npm downloads](https://img.shields.io/npm/dt/vue-mny.svg)](https://npmjs.com/package/vue-mny)
[![Build Status](https://travis-ci.org/casbloem/vue-mny.svg?branch=master)](#)



### Example
You can find an example at https://packages.cblm.nl/examples/vue-mny



### Setup
```bash
npm install vue-mny --save
```

```javascript
const vueMny = require('vue-mny');
Vue.use(vueMny, {
    locale: 'en-US',
    style: "currency",
    currency: 'USD',
    currencyDisplay: 'symbol',
});
```

### Usage

![carbon 6](https://user-images.githubusercontent.com/5813001/38521565-621af1b6-3c46-11e8-9d1d-b83ae93e74fb.png)


see [vue-mny example](https://packages.cblm.nl/examples/vue-mny) to see it live.



### Options
```javascript
{
    locale: 'en-US',
    style: "currency",
    currency: 'USD',
    currencyDisplay: 'symbol',
}
```


##### locale
A string with a BCP 47 language tag.

##### style
The formatting style to use. Possible values are `decimal` for plain number formatting, and `currency` for currency formatting. The default is `decimal`.

##### currency
The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `USD` for the US dollar, `EUR` for the euro, or `CNY` for the Chinese RMB. There is no default value; if the style is `currency`, the currency property must be provided.

##### currencyDisplay
How to display the currency in currency formatting. Possible values are `symbol` to use a localized currency symbol such as €, `code` to use the ISO currency code, `name` to use a localized currency name such as `dollar`; the default is `symbol`.



### Changelog

**version 0.2.2**  
- vue-mny function splitted from vue's install module.
- docs improvement
- Added test.js.


**version 0.2.1**  
- docs improvement


**< version 0.2.0**  
- Initial setup of the package.




