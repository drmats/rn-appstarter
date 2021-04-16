/**
 * Metro configuration for React Native.
 *
 * @module @xcmats/metro-config
 * @license MIT
 * @copyright Mat. 2021-present
 */




module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};
