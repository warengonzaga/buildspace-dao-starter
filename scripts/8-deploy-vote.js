// we are importing the sdk that we previously set up in the "1-initialize-sdk.js" file
import sdk from "./1-initialize-sdk.js";

// in order to deploy the new module we need our old friend the app module for one last time.
const appModule = sdk.getAppModule(
  "<APP_MODULE_ADDRESS>",
);

/**
 *
 *
 * your code to deploy the vote module goes here
 *
 *
 **/
