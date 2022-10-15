/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    i18next: {
      debug: true,
      initImmediate: false,
      backend: {
        loadPath: "./src/locales/{{lng}}/{{ns}}.md",
      },
    },
    i18nextPlugins: { fsBackend: "i18next-fs-backend" },
  };