/**
 * Init logic.
 *
 * @module @xcmats/init
 * @license MIT
 * @copyright Mat. 2021-present
 */




import { share } from "mem-box";
import App from "./components/app";




/**
 * Application init.
 */
export default function init (): { (): JSX.Element } {

    // eslint-disable-next-line no-console
    const logger = console;

    // share
    share({ logger });

    // greet
    logger.info("Boom! 💥");

    return App;

}




// merge into global declarations
declare global {

    // shared memory
    interface Ctx {
        logger: Console;
    }

}
