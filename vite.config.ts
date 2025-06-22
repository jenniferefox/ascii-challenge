import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or whatever framework plugin you're using

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Keep your existing plugins
  base: '/ascii-challenge/', // <-- Add this line, replace 'your-repo-name' with your actual repository name
})
