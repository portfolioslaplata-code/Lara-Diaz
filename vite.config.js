import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { portfolio } from './src/data/portfolio.js';

const escapeHtml = (text) => text.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: 'portfolio-metadata',
    transformIndexHtml(html) {
      const { seo } = portfolio;
      return {
        html: html.replace('<title>Portfolio</title>', `<title>${escapeHtml(seo.title)}</title>`),
        tags: [
          { name: 'description', content: seo.description },
          { property: 'og:title', content: seo.title },
          { property: 'og:description', content: seo.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:locale', content: 'es_AR' },
          ...(seo.noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
        ].map((attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })),
      };
    },
  }],
});
