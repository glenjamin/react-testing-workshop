process.env.NODE_ENV = "testing";
require("babel-register");

/* eslint-disable no-console */
const error = console.error;
console.error = function(warning) {
  if (/(Invalid prop|Failed prop type|Failed prop type)/.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, arguments);
};
