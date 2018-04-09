module.exports = {
  mny: function(optionsUser) {
    const extend = function() {
      let out = {};
      for (let i = 0, len = arguments.length; i < len; ++i) {
        let obj = arguments[i];
        if (!obj) continue;
        for (let key in obj) {
          if (!obj.hasOwnProperty(key) || !obj[key]) continue;
          if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
            out[key] = extend(out[key], obj[key]);
            continue;
          }
          out[key] = obj[key];
        }
      }
      return out;
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
        return String.toString(raw);
      }
    };

    return (str, optionsFilter = {}, optionsForce = {}) => {
      return moneyfy(str, extend(optionsGlobal, optionsFilter, optionsForce));
    };
  },
  install: function(Vue, optionsUser) {
    let vuemny = module.exports.mny(optionsUser);
    Vue.directive("mny", function(el, binding) {
      el.innerHTML = binding.value instanceof Object
          ? vuemny(binding.value.input, binding.value)
          : vuemny(binding.value);
    });
  }
};
