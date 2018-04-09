module.exports = {
  initialStarter() {
    const log = str => {
      console.log(str);
    };
    log("js-tester 0.0.1 by cblm dev\n");
    log("starting setup...");
    log("importing package(s)\n");
    const tester = require("./vue-mny.js").mny();
    log("setup completed, starting tests now...");
    const tests = [
      {
        input: tester("100", {
          locale: "en-US",
          style: "currency",
          currency: "USD",
          currencyDisplay: "symbol",
        }),
        expected_output: "$1.00"
      },
      {
        input: tester("100", {
          locale: "en-US",
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol"
        }),
        expected_output: "€1.00"
      },
      {
        input: tester("100", {
          locale: "nl-NL",
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol"
        }),
        expected_output: "€ 1.00"
      },
      {
        input: tester("100", {
          locale: "nl",
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol"
        }),
        expected_output: "€ 1.00"
      },
      {
        input: tester("10000", {
          locale: "nl-NL",
          style: "currency",
          currency: "EUR",
          currencyDisplay: "symbol"
        }),
        expected_output: "€ 100.00"
      }
    ];

    log("---------------------------------------");

    var fails = 0;
    for (var i = 0; i < tests.length; i++) {
      let test = tests[i];
      log("> expects: " + test.expected_output);
      log("> gets: " + test.input);
      if (String.toString(test.input) == String.toString(test.expected_output))
        log("TEST " + i + " SUCCESS");
      else {
        fails++;
        log("TEST " + i + " FAILED");
      }
      log("---------------------------------------");
    }

    return "Testing completed! (" + i + " tests, " + fails + " failed)";
  }
};
