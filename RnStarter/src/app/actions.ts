/**
 * Logic - action types and creators.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { actionCreators } from "red-goodies";




/**
 * Action types.
 */
export enum AppActionType {

    RESET = "App/RESET",

    READY = "App/READY",
    NOT_READY = "App/NOT_READY",

    CLEAR_ERROR = "App/CLEAR_ERROR",

    PING = "App/PING",

}




/**
 * Action creators.
 */
export default actionCreators(AppActionType, {

    // ...
    NOT_READY: (error?: string) => error ? { error } : { error: null },

});
