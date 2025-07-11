const esbuild = require('esbuild')
require("dotenv").config();

const {
    EXPRESS_PORT
} = process.env

const define = {
    "process.env.EXPRESS_PORT": EXPRESS_PORT
}

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    platform: 'node',
    outfile: 'dist/listel-api.js',
    define,
}).catch(() => process.exit(1))