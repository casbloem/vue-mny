# vue-mny
vue-mny  money formatting for Vue

### Example
You can find an example at https://vue-mny.cblm.nl/example/example.html


### Setup
```bash
npm install vue-mny --save-dev
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
```javascript
// number = integer
<span v-mny="number"></span>

// you may simply chain options
<span v-mny="{ input: number, locale: '', ... }"></span>
```

see [vue-mny example](https://vue-luxon.cblm.nl/example/example.html) to see it live.



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
The formatting style to use. Possible values are `decimal` for plain number formatting, `currency` for currency formatting, and `percent` for percent formatting; the default is `decimal`.

##### currency
The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as `USD` for the US dollar, `EUR` for the euro, or `CNY` for the Chinese RMB. There is no default value; if the style is `currency`, the currency property must be provided.

##### currencyDisplay
How to display the currency in currency formatting. Possible values are `symbol` to use a localized currency symbol such as €, `code` to use the ISO currency code, `name` to use a localized currency name such as `dollar`; the default is `symbol`.