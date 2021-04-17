/**
 * Metro configuration for React Native.
 *
 * @module @xcmats/metro-config
 * @license MIT
 * @copyright Mat. 2021-present
 */




const path = require("path");




// ...
module.exports = {
    projectRoot: path.resolve(__dirname, "./"),
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};
