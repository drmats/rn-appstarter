/**
 * Application entry point.
 *
 * @module @xcmats/index
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { AppRegistry } from "react-native";

import init from "./src/init";
import { name } from "./app.json";




/**
 * App entry point.
 */
AppRegistry.registerComponent(name, init);
