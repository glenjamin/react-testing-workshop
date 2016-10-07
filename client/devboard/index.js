import "../styles/base.css";
import "../styles/index.css";

const context = require.context("./", true, /\.dev\.js$/);
context.keys().forEach((moduleName) => {
  try {
    context(moduleName);
  } catch (ex) {
    // Rethrow error in fresh stack to avoid killing HMR
    setTimeout(() => {
      ex.message = `Failed to load ${moduleName} - ${ex.message}`;
      throw ex;
    });
  }
});

if (module.hot) {
  module.hot.accept();
}
