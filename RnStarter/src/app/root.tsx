/**
 * Root application component with all providers.
 *
 * @module @xcmats/app
 * @license MIT
 * @copyright Mat. 2021-present
 */




import type { FC } from "react";
import type { Store } from "redux";
import type { Action } from "red-goodies";
import type { InferProps } from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import type { RootState } from "../state/redux";




/**
 * Root element propTypes definition.
 */
const rootPropTypes = {
    element: PropTypes.node.isRequired,
};
type RootComponentType = FC<InferProps<typeof rootPropTypes>>;




/**
 * Root-wrapping element creation.
 */
export default function createRootWrapper (
    store: Store<RootState, Action>,
): RootComponentType {

    /**
     * `<RootUi>` - root component.
     */
    const Root: RootComponentType = ({ element }) =>
        <Provider store={store}>
            { element }
        </Provider>;

    Root.propTypes = rootPropTypes;

    return Root;

}
