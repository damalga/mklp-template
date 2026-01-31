import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import legacy from '@vitejs/plugin-legacy';

// Contexto para las plantillas Handlebars (mismo que handlebars-context.js)
const pageContext = {
  title: 'Landing Suscripción',
  description: 'Plantilla de landing page con swiper'
};

export default defineConfig({
  // Plugins que extienden funcionalidad de Vite
  plugins: [
    // Plugin para compilar archivos .hbs (Handlebars)
    handlebars({
      // Directorio de partials
      partialDirectory: resolve(__dirname, 'src/pages/partials'),
      // Helpers de Handlebars personalizados
      helpers: {
        // Helper: {{#if-dynamic-import}}
        'if-dynamic-import': function (options) {
          return options.fn(this);
        },
        // Helper: {{#or a b}}
        or: function (...args) {
          const options = args.pop();
          return args.some(Boolean) ? options.fn(this) : options.inverse(this);
        },
        // Helper: {{#and a b}}
        and: function (...args) {
          const options = args.pop();
          return args.every(Boolean) ? options.fn(this) : options.inverse(this);
        }
      },
      context: (pagePath) => pageContext
    }),

    // Plugin para compatibilidad con navegadores antiguos
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],

  // Configuración del servidor de desarrollo
  server: {
    port: 8082,          // Puerto (mismo que webpack-dev-server)
    open: true,          // Abre el navegador automáticamente
    host: true           // Permite acceso desde la red local
  },

  // Configuración del build
  build: {
    outDir: 'dist',      // Carpeta de salida
    emptyOutDir: true,   // Limpia la carpeta antes de build

    // Configuración de entrada (Single-Page App)
    rollupOptions: {
      input: {
        // Página principal
        main: resolve(__dirname, 'index.html')
      }
    },

    // Assets
    assetsDir: 'assets',

    // Source maps para debugging
    sourcemap: true
  },

  // Alias para imports más limpios
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/assets/styles'),
      '@scripts': resolve(__dirname, 'src/assets/scripts')
    }
  },

  // Configuración de CSS
  css: {
    preprocessorOptions: {
      scss: {
        // API moderna de Sass (Dart Sass)
        api: 'modern-compiler'
      }
    }
  }
});
