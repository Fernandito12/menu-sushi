import { defineConfig } from 'astro/config';

// Este proyecto se publica en el repositorio Fernandito12/menu-sushi.
// GitHub Pages necesita la subruta del repositorio; localhost y Vercel usan la raíz.
const base = process.env.GITHUB_ACTIONS === 'true' ? '/menu-sushi' : '/';

export default defineConfig({
  site: 'https://fernandito12.github.io',
  base,
});
