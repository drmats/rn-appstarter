/**
 * Init logic.
 *
 * @module @xcmats/init
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { FC } from "react";
import { createElement } from "react";
import {
    useMemory as useGenericMemory,
    share,
} from "mem-box";
import { isObject } from "@xcmats/js-toolbox/type";

import { createReduxStore } from "./state/redux";
import createRootWrapper from "./app/root";
import Layout from "./layout/main";
import * as config from "./config";
import {
    contributors,
    dependencies,
    description,
    devDependencies,
    name,
    version,
} from "../package.json";




/**
 * Type-safe instance of useMemory.
 */
export const useMemory: (() => Ctx) = useGenericMemory;




/**
 * Application init.
 */
export default function init (): FC {

    const
        // app memory - volatile, imperative context/storage
        ctx = useMemory(),

        // redux store
        store = createReduxStore(),

        // eslint-disable-next-line no-console
        logger = console;

    // share
    share({ logger, store });

    // greet
    logger.info("Boom! 💥");

    // expose dev. namespace and some convenience shortcuts
    if (__DEV__ && !isObject(window[config.devNamespaceKey])) {
        window[config.devNamespaceKey] = {
            config, ctx,
            package: {
                contributors,
                dependencies,
                description,
                devDependencies,
                name,
                version,
            },
        };
    }

    return () => createElement(
        createRootWrapper(store),
        { element: createElement(Layout, null, null) },
        null,
    );

}




// merge into global declarations
declare global {

    // shared memory
    interface Ctx {
        logger: Console;
        store: ReturnType<typeof createReduxStore>;
    }

    // DOM window
    interface Window {
        [config.devNamespaceKey]: Record<string, unknown>;
    }

}
