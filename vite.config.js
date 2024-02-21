import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Change the host to bind to all network interfaces
    // port: 8081 // Change the port to 8080
  }
});