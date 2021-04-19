/**
 * Redux logic - middlewares.
 *
 * @module @xcmats/redux
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { Middleware } from "redux";
import thunk from "redux-thunk";

import { useMemory } from "../init";




/**
 * All middlewares list.
 */
export default function middlewares (): Middleware[] {
    const ctx = useMemory();
    return [
        thunk.withExtraArgument(ctx),
    ];
}
