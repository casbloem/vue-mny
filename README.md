# vue-mny
Currency formatting for all currencies, and all languages. As a simple Vue plugin.


[![GitHub last commit](https://img.shields.io/github/last-commit/casbloem/vue-mny.svg)](#)
[![GitHub version](https://img.shields.io/github/package-json/v/casbloem/vue-mny.svg)](https://github.com/casbloem/vue-mny)


[![npm version](https://img.shields.io/npm/v/vue-mny.svg)](https://npmjs.com/package/vue-mny)
[![npm downloads](https://img.shields.io/npm/dt/vue-mny.svg)](https://npmjs.com/package/vue-mny)
[![Build Status](https://travis-ci.org/casbloem/vue-mny.svg?branch=master)](#)


#### v0.3.1   


## Setup
```bash
npm install vue-mny --save
```

```javascript
const vueMny = require('vue-mny');
Vue.use(vueMny, {
    locale: 'en-US',
    currency: 'USD',
    currencyDisplay: 'symbol',
});
```

## Usage    
![easyway](https://user-images.githubusercontent.com/5813001/38654333-01b58384-3e0f-11e8-9a0a-c9edd4aed56b.png)     
```javascript
<span v-mny="moneyVariable"></span>    
```     
    

![withoptions](https://user-images.githubusercontent.com/5813001/38654346-126e7b68-3e0f-11e8-8d10-a32b73a7d058.png)      

```javascript 
<span v-mny="{ input: moneyVariable, currency: 'EUR' }"></span>    

// shorthand:
<span v-mny.code="moneyVariable"></span>
```  


## Options 
```javascript
{
    locale: 'en-US',
    currency: 'USD',
    currencyDisplay: 'symbol',
}
```


### locale
*default:* `en-US`    
A string with a [BCP 47 language tag](https://www.w3.org/International/articles/language-tags/).

### currency

*default:* `USD`   

Possible values are the [ISO 4217 currency codes](https://www.ibm.com/support/knowledgecenter/en/SSZLC2_7.0.0/com.ibm.commerce.payments.developer.doc/refs/rpylerl2mst97.htm), such as `USD` for the US dollar, `EUR` for the euro, or `CNY` for the Chinese RMB.

### currencyDisplay
*default:* `symbol`   
How to display the currency in currency formatting. Possible values are `symbol` to use a localized currency symbol such as €, `code` to use the ISO currency code, `name` to use a localized currency name such as `dollar`.



## Changelog

**version 0.3.1**   
- Patch

**version 0.3.0**   
- Major improvements...







