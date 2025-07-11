const esbuild = require('esbuild')

const define = {
    "key": "value"
}

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    platform: 'node',
    outfile: 'dist/listel-api.js',
    define,
}).catch(() => process.exit(1))