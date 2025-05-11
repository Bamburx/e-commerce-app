import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/e-commerce-app/' : '/';

  return {
    base,
    plugins: [react()],
  };
});