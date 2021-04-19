/**
 * Logic - selectors.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */




import type { RootState } from "../state/redux";




/**
 * ...
 */
export const getTick = (s: RootState) => s.app.tick;
