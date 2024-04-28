import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_phone-catalog/',
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@material-ui/icons': '@material-ui/icons/esm',
  //   },
  // },
});
