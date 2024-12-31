// https://nuxt.com/docs/api/configuration/nuxt-config
import colors from "tailwindcss/colors"

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
      colors: {
        primary: "blue",
        neutral: "white",
      },
      card: {
        slots: {
          root: "bg-[#292D32]   ring ring-[#292D32]  rounded-[calc(var(--ui-radius)*2)] shadow-sm",
          // header: "p-4 sm:px-6",
          body: "p-2 sm:p-2",
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
          color: {
            primary: "",
            secondary: "",
            success: "",
            info: "",
            warning: "",
            error: "",
            neutral: "",
          },
          variant: {
            solid: "",
            outline: "",
            soft: "",
            subtle: "",
          },
          size: {
            xs: {
              base: "text-[11px]/3 px-2 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",
              leadingIcon: "size-2",
              leadingAvatarSize: "2xs",
              trailingIcon: "size-2",
            },
            sm: {
              base: "text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",
              leadingIcon: "size-3",
              leadingAvatarSize: "3xs",
              trailingIcon: "size-3",
            },
            md: {
              base: "text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",
              leadingIcon: "size-4",
              leadingAvatarSize: "3xs",
              trailingIcon: "size-4",
            },
            lg: {
              base: "text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
              leadingIcon: "size-5",
              leadingAvatarSize: "2xs",
              trailingIcon: "size-5",
            },
            xl: {
              base: "text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
              leadingIcon: "size-6",
              leadingAvatarSize: "2xs",
              trailingIcon: "size-6",
            },
          },
        },
        compoundVariants: [
          {
            color: "primary",
            variant: "solid",
            class: "bg-[var(--ui-primary)] text-[var(--ui-bg)]",
          },
          {
            color: "primary",
            variant: "outline",
            class:
              "text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/50",
          },
          {
            color: "primary",
            variant: "soft",
            class: "bg-[var(--ui-primary)]/10 text-[var(--ui-primary)]",
          },
          {
            color: "primary",
            variant: "subtle",
            class:
              "bg-[var(--ui-primary)]/10 text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25",
          },
          {
            color: "neutral",
            variant: "solid",
            class: "text-[var(--ui-bg)] bg-[var(--ui-bg-inverted)]",
          },
          {
            color: "neutral",
            variant: "outline",
            class:
              "ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg)]",
          },
          {
            color: "neutral",
            variant: "soft",
            class: "text-[var(--ui-text)] bg-[var(--ui-bg-elevated)]",
          },
          {
            color: "neutral",
            variant: "subtle",
            class:
              "ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg-elevated)]",
          },
        ],
        defaultVariants: {
          color: "primary",
          variant: "solid",
          size: "md",
        },
      },
    },
  },
  image: {
    domains: ["cdn.shopify.com"],
  },
})
