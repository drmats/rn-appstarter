/**
 * Redux logic - middlewares.
 *
 * @module @xcmats/redux
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { Middleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import { useMemory } from "../init";
import { reduxDevtoolsAvailable } from "./redux";

/* eslint-disable @typescript-eslint/ban-ts-comment */




/**
 * All middlewares list.
 */
export default function createMiddlewares (): Middleware[] {
    const
        ctx = useMemory(),
        ms = [];

    // redux-thunk middleware
    ms.push(thunk.withExtraArgument(ctx));

    // redux-logger middleware (only in development mode)
    if (__DEV__ && !reduxDevtoolsAvailable()) {
        ms.push(createLogger({
            duration: true,
            timestamp: false,
            logger: ctx.logger,
            level: {
                // @ts-ignore
                action: (action) => action.payload ? "info" : false,
                nextState: false,
                prevState: false,
            },
        }));
    }

    return ms;
}
