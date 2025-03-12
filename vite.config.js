// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../static/', 
    base: 'https://mbgame.github.io/planet/',
    // base: 'https://mbgame@bitbucket.org/bitazza/prototype-planet.git', 
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        assetPrefix: '/planet/' 
    },
});