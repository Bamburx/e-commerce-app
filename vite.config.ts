import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/e-commerce-shop/' : '/';

  return {
    base,
    plugins: [react()],
  };
});