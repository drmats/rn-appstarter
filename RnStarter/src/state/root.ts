/**
 * Redux logic - actions, reducers, states and thunks.
 *
 * @module @xcmats/redux
 * @license MIT
 * @copyright Mat. 2021-present
 */




import appState from "../app/state";
import appActions from "../app/actions";
import appReducers from "../app/reducers";
import * as appThunks from "../app/thunks";




/**
 * State tree (all combined states).
 */
export const initialState = {
    app: appState,
};




/**
 * Action tree (all combined actions).
 */
export const action = {
    app: appActions,
};




/**
 * Reducer tree (all combined reducers).
 */
export const reducer = {
    app: appReducers,
};




/**
 * Thunk tree (all combined thunks).
 */
export const thunk = {
    app: appThunks,
};
