// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  app: {
    head: {
      title: "Movie DB  Viewer",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  image: {
    imgix: {
      baseURL: "https://assets.imgix.net",
    },
  },
  appConfig: {
    ui: {
      colors: {
        primary: "blue",
        neutral: "white",
      },
      card: {
        slots: {
          root: "bg-[#292D32]   ring ring-[#292D32]  rounded-[calc(var(--ui-radius)*2)] shadow-sm",
          // header: "p-4 sm:px-6",
          body: "p-2 sm:p-2 h-full",
          // footer: "p-4 sm:px-6",
        },
      },
      badge: {
        slots: {
          base: "font-medium inline-flex items-center",
          label: "truncate",
          leadingIcon: "shrink-0",
          leadingAvatar: "shrink-0",
          leadingAvatarSize: "",
          trailingIcon: "shrink-0",
        },
        variants: {
          size: {
            xs: {
              base: "text-[11px]/3 custom-body-bage px-2 py-0.5  gap-1 rounded-[calc(var(--ui-radius))] items-center",
              leadingIcon: "size-2",
              leadingAvatarSize: "2xs",
              trailingIcon: "size-2",
            },
          },
        },
      },
    },
  },
  image: {
    domains: ["cdn.shopify.com"],
  },
})
