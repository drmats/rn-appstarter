/**
 * Metro configuration for React Native.
 *
 * @module @xcmats/metro-config
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";




/**
 * App entry point.
 */
AppRegistry.registerComponent(appName, () => App);
