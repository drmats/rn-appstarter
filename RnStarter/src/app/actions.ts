/**
 * Logic - action types and creators.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { actionCreators } from "red-g";




/**
 * Action types.
 */
enum ActionTypes {

    RESET = "App/RESET",

    READY = "App/READY",
    NOT_READY = "App/NOT_READY",

    PING = "App/PING",

}




/**
 * Action creators.
 */
export default actionCreators(ActionTypes, {

    // ...
    NOT_READY: (error?: string) => error ? { error } : { error: null },

});
