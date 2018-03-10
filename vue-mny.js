module.exports = {
  install: function(Vue, optionsUser) {
    const extend = function() {
      var extended = {};
      var deep = false;
      var i = 0;
      var length = arguments.length;
      if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
      }
      var merge = function(obj) {
        for (var prop in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            if (
              deep &&
              Object.prototype.toString.call(obj[prop]) === "[object Object]"
            ) {
              extended[prop] = extend(true, extended[prop], obj[prop]);
            } else {
              extended[prop] = obj[prop];
            }
          }
        }
      };
      for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
      }
      return extended;
    };

    const optionsGlobal = extend({
      symbol: 'euro',
    }, optionsUser);

    const symbols = {
      dollar: '&dollar;',
      euro: '&euro;',
    };

    const moneyfy = (raw, options) => {
      let symbol = symbols[options.symbol],
          str = raw;
      return String(symbol + str);
    }

    const vuemny = (str, optionsFilter = {}, optionsForce = {}) => {
      return moneyfy(str, extend(optionsGlobal, optionsFilter, optionsForce));
    };

    Vue.filter("mny", function() {
      return vuemny(arguments[0], arguments[1]);
    });

  }
};
