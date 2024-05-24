import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_DATABASE_API': JSON.stringify(
        env.REACT_APP_DATABASE_API,
      ),
    },
    base: '/react_phone-catalog/',
    plugins: [react()],
    // resolve: {
    //   alias: {
    //     '@material-ui/icons': '@material-ui/icons/esm',
    //   },
    // },
  };
});
