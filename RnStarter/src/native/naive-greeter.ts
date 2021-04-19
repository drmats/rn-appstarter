/**
 * Redux logic - middlewares.
 *
 * @module @xcmats/naive-greeter
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { NativeModules } from "react-native";
const { NaiveGreeter } = NativeModules;




/**
 * ...
 */
interface NaiveGreeterInterface {
    greet (name: string): Promise<string>;
}




export default NaiveGreeter as NaiveGreeterInterface;
