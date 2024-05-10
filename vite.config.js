import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',
    publicDir: '../public/', // Adjust path relative to the `root` directory
    base: 'https://localhost' || 'https://mbgame.github.io/planet/',
});