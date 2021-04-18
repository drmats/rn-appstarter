/**
 * Init logic.
 *
 * @module @xcmats/init
 * @license MIT
 * @copyright Mat. 2021-present
 */




import App from "./components/app";




/**
 * Application init.
 */
export default function init (): { (): JSX.Element } {

    return App;

}
