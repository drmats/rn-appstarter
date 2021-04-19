/**
 * Logic - reducers.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { Action } from "red-goodies";
import {
    isStringActionType,
    isWithPayload,
    sliceReducer,
} from "red-goodies";
import { inc } from "@xcmats/js-toolbox/math";

import initState from "./state";
import app from "./actions";




/**
 * Reducers.
 */
export default sliceReducer(initState) (
    (slice) => slice
        // ...
        .handle(app.RESET, () => initState)

        // ...
        .handle(app.READY, (state) => ({ ...state, ready: true }))
        .handle(app.NOT_READY, (state) => ({ ...state, ready: false }))

        // ...
        .handle(app.CLEAR_ERROR, (state) => ({ ...state, error: null }))

        //...
        .match(
            (action): action is Action<{ error: string }> =>
                isWithPayload(action) && action.payload.error,
            (state, payload) => ({ ...state, error: payload.error }),
        )

        // ...
        .match(
            (action) => isStringActionType(action),
            (state) => ({ ...state, tick: inc(state.tick) }),
        ),
);
