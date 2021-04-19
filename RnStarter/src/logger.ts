/**
 * Logger logic.
 *
 * @module @xcmats/logger
 * @license MIT
 * @copyright Mat. 2021-present
 */

/* eslint-disable no-console */




import { dict } from "@xcmats/js-toolbox/struct";
import { reduxDevtoolsAvailable } from "./state/redux";




/**
 * Remove console color (%c) formatting.
 */
export const rcolor = (args: unknown[]): unknown[] => {
    // do nothing if there are no enough arguments
    if (args.length <= 1) return args;

    // do nothing if first argument is not a string
    if (typeof args[0] !== "string") return args;

    // split format string to %c-separated parts
    let parts = args[0].split("%c");

    // do nothing if no "%c" was found
    if (parts.length <= 1) return args;

    // new format string (array of its parts)
    let newf = [parts[0]];

    // index
    let i = 1;

    // build new format string (remove color info)
    while (i < args.length && i < parts.length) {
        newf.push(parts[i]);
        i++;
    }

    // return format string and all remainders
    return [
        [...newf, ...parts.slice(i)].join(""),
        ...args.slice(i),
    ];
};




/**
 * Logger (effectful only in development, color-stripped in terminal).
 */
export default function createLogger (): Console {
    const methods: (keyof Console)[] = [
        "assert", "error",
        "group", "groupCollapsed", "groupEnd",
        "info", "log", "warn",
    ];

    if (__DEV__) {
        return reduxDevtoolsAvailable() ? console : {
            ...console,
            ...dict(methods.map(n => [
                n, (...args: unknown[]) => console[n](...rcolor(args)),
            ])),
        };
    }

    return {
        ...console,
        ...dict(methods.map(n => [n, () => undefined])),
    };
}
