/**
 * Logic - state.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




/**
 * Initial state shape.
 */
export default ({

    // is whole application initialized?
    ready: false,

    // last error
    error: null as string | null,

    // action counter
    tick: 0,

});
