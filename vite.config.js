import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Akshat-Garg7/Task_listing', // Replace with your repository name
});
