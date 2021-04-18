/**
 * Init logic.
 *
 * @module @xcmats/init
 * @license MIT
 * @copyright Mat. 2021-present
 */




import {
    useMemory as useGenericMemory,
    share,
} from "mem-box";
import { isObject } from "@xcmats/js-toolbox/type";

import * as config from "./config";
import App from "./components/app";




/**
 * Type-safe instance of useMemory.
 */
export const useMemory: (() => Ctx) = useGenericMemory;




/**
 * Application init.
 */
export default function init (): { (): JSX.Element } {

    const
        // app memory - volatile, imperative context/storage
        ctx = useMemory(),

        // eslint-disable-next-line no-console
        logger = console;

    // share
    share({ logger });

    // greet
    logger.info("Boom! 💥");

    // expose dev. namespace and some convenience shortcuts
    if (!isObject(window[config.devNamespaceKey])) {
        window[config.devNamespaceKey] = {
            config, ctx,
        };
    }

    return App;

}




// merge into global declarations
declare global {

    // DOM Window
    interface Window {
        [key: string]: unknown;
    }

    // shared memory
    interface Ctx {
        logger: Console;
    }

}
