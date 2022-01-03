import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '/src': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        sourcemap: true,
        outDir: 'dist/app',
        assetsDir: 'app/assets'
    },
});
