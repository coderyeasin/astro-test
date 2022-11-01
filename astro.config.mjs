import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(
      {
        // config:{ applyBaseStyles: false}
    }), 
    astroI18next(), mdx(), 
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),sitemap(
      {
        i18n: {
        defaultLocale: "en", // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          ar: "ar",
        },
      },
      }
    )],
    site:'https://idyllic-cassata-b3391f.netlify.app'
  });
