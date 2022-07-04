const path = require("path");
const alias = require("@rollup/plugin-alias");

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            alias({
                entries: [
                    { find: '@src', replacement: path.resolve(__dirname, "src/") }
                ]
            })
        );
        return config;
    },
};