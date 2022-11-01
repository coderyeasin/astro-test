import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(
      {
        // config:{ applyBaseStyles: false}
    }), 
    astroI18next(), mdx(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),sitemap()],
    site:'https://idyllic-cassata-b3391f.netlify.app'
  });
