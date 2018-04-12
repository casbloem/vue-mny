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
      },
      optionsUser
    );

    const moneyfy = (r, options) => {
      let n = Number(r);
      if (isNaN(n) || !isFinite(n)) return '[invalid]';
      return new Intl.NumberFormat(options.locale, {
        style: options.style,
        currency: options.currency,
        currencyDisplay: options.currencyDisplay
      }).format(n);
    };

    const modsToOpts = mods => {
      let r = {};
      let y = {
        symbol: "currencyDisplay",
        code: "currencyDisplay"
      };
      for (let i in mods)
        if (y.hasOwnProperty(mods[i])) r[y[mods[i]]] = mods[i];
      return r;
    };

    return (str, optionsFilter = {}, mods = {}) => {
      return moneyfy(
        str,
        extend(optionsGlobal, optionsFilter, modsToOpts(mods))
      );
    };
  },

  install: function(Vue, optionsUser) {
    Vue.directive("mny", (el, binding) => {
      let mny = module.exports.mny(optionsUser);
      let mods = Object.keys(binding.modifiers).filter(function(k) {
        return binding.modifiers[k];
      });
      let bval = binding.value;
      let returnString = "[invalid]";
      if (
        typeof bval == "number" ||
        (typeof bval == "object" && bval instanceof Number) ||
        typeof bval == "string" ||
        typeof bval == "integer"
      )
        returnString = mny(bval, {}, mods);
      if (typeof bval == "object" && bval.hasOwnProperty("input"))
        returnString = mny(bval.input, bval, mods);

      el.innerHTML = returnString;
    });
  }
};
