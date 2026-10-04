import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        // This is a client-only SPA: Motion's server/client boundary directives
        // have no effect here. Keep every other build warning visible.
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.id?.includes('framer-motion')) return;
        defaultHandler(warning);
      },
    },
  },
});
