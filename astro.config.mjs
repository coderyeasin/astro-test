import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({// config:{ applyBaseStyles: false}
  }), astroI18next(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});