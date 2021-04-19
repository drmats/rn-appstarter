/**
 * Redux logic.
 *
 * @module @xcmats/redux
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type {
    Middleware,
    Store,
} from "redux";
import type { ThunkAction } from "redux-thunk";
import type { Action } from "red-goodies";
import { share } from "mem-box";
import {
    applyMiddleware,
    createStore,
    combineReducers,
    compose,
} from "redux";
import { bindActionCreatorsTree } from "red-goodies";
import { isFunction } from "@xcmats/js-toolbox/type";

import {
    action,
    initialState,
    reducer,
    thunk,
} from "./root";
import createMiddlewares from "./middlewares";




/**
 * Return devtools extension composer or regular redux one.
 */
export const getComposer = (): typeof compose =>
    __DEV__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;




/**
 * Check of redux devtools are available.
 */
export const reduxDevtoolsAvailable = (): boolean =>
    Boolean(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);




/**
 * All reducers combined.
 */
const rootReducer = combineReducers(reducer);




/**
 * Redux state shape.
 */
export type RootState = ReturnType<typeof rootReducer>;




/**
 * ThunkAction type alias.
 */
export type ThunkType = ThunkAction<
    void,
    RootState,
    Ctx,
    Action
>;




/**
 * Create redux store with thunk-middleware
 * (optionally passing extra argument).
 */
export const createReduxStore = (): Store<RootState, Action> => {

    let
        // redux middlewares
        middlewares = createMiddlewares(),

        // redux store
        store = createStore(
            rootReducer,
            initialState,
            getComposer()(
                applyMiddleware(...middlewares),
            ),
        ),

        // bound actions tree
        act = bindActionCreatorsTree(action, store.dispatch),

        // bound thunks tree - effects
        fx = bindActionCreatorsTree(thunk, store.dispatch),

        // all-sub-states resetting action
        resetState = () => Object.entries(act).forEach(([_, branch]) => {
            if (isFunction(branch.RESET)) branch.RESET();
        });


    // share relevant vars
    share({
        initialState,
        action, act,
        thunk, fx,
        middlewares,
        resetState,
    });

    return store;

};




// merge into global declarations
declare global {

    // shared memory
    interface Ctx {
        action: typeof action;
        act: typeof action;
        initialState: typeof initialState;
        thunk: typeof thunk;
        fx: typeof thunk;
        middlewares: Middleware[];
        resetState: () => void;
    }

    // DOM window
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }

}
