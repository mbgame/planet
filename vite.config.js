// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../public/', // Adjust path relative to the `root` directory
    base: 'https://mbgame.github.io/planet/', // Replace with your GitHub Pages URL
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
});