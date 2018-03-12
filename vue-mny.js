module.exports = {
  install: function(Vue, optionsUser) {
    const extend = function() {
      let extended = {},
        deep = false,
        i = 0,
        length = arguments.length;
      if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
        deep = arguments[0];
        i++;
      }
      let merge = function(obj) {
        for (let prop in obj) {
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
        let obj = arguments[i];
        merge(obj);
      }
      return extended;
    };

    const optionsGlobal = extend(
      {
        locale: "en-US",
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol",

        env: "prod"
      },
      optionsUser
    );

    const moneyfy = (raw, options) => {
      try {
        return new Intl.NumberFormat(options.locale, {
          style: options.style,
          currency: options.currency,
          currencyDisplay: options.currencyDisplay
        }).format(raw / 100);
      } catch (err) {
        if (options.env == "dev") console.error(err);
        return "[oeps]";
      }
    };

    const vuemny = (str, optionsFilter = {}, optionsForce = {}) => {
      return moneyfy(str, extend(optionsGlobal, optionsFilter, optionsForce));
    };

    Vue.directive("mny", function(el, binding) {
      el.innerHTML =
        binding.value instanceof Object
          ? vuemny(binding.value.input, binding.value)
          : vuemny(binding.value);
    });
  }
};
