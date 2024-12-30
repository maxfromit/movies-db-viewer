// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
  appConfig: {
    ui: {
      card: {
        slots: {
          root: "bg-[var(--ui-bg)] ring ring-[var(--ui-border)] divide-y divide-[var(--ui-border)] rounded-[calc(var(--ui-radius)*2)] shadow-sm",
          header: "p-4 sm:px-6",
          body: "p-2 sm:p-2",
          footer: "p-4 sm:px-6",
        },
      },
    },
  },
  image: {
    domains: ["cdn.shopify.com"],
  },
})