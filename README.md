This is an example repo that trying to demostrate the `require(esm)` feature in Node.js and Rollup bundler.

This repo patches `ms` package to use ESM with a "CJS proxy" `module.exports = require('./index.mjs').default`. It's dependent `debug` is a CJS package, where it works for both Node.js and Rollup. This verifies `ESM -> CJS -> ESM` works.

- `pnpm run start` to run the Node.js script
- `pnpm run build` to bundle the script with Rollup and `pnpm run start:rollup` to run the bundled script with `pnpm run start:dist`
