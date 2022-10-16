/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLanguage: "en",
    supportedLanguages: ["en", "ar"],
    i18next: {
      debug: true,
      initImmediate: false,
      ns: ["en"],
      backend: {
        loadPath: "./src/posts/{{lng}}/{{ns}}.md",
      },
    },
    i18nextPlugins: { fsBackend: "i18next-fs-backend" },
  };