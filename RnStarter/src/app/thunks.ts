/**
 * Logic - thunks.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { ThunkType } from "../state/redux";
import { delay } from "@xcmats/js-toolbox/async";




export default {

    /**
     * Set application ready state (example thunk).
     */
    setReady: (condition: boolean, error?: string): ThunkType =>
        async (_d, getState, { act, logger }) => {
            await delay(250);
            getState().app.ready !== condition && (
                condition ? act.app.READY() : act.app.NOT_READY(error)
            );
            condition && logger.info("Ready! ✅");
        },

};
