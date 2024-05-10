// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../public/', 
    base: 'https://mbgame.github.io/planet/', 
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        assetPrefix: '/planet/' 
    },
});