/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /*
       * IRFAN & IRFAN BRAND SYSTEM
       *
       * Existing template uses:
       * charcoal-* = dark / neutral colors
       * gold-*     = accent colors
       *
       * We keep those class names so existing components
       * automatically inherit the new branding.
       */

      colors: {
        charcoal: {
          50: "#FBF8F3",
          100: "#F5EFE7",
          200: "#E8DED2",
          300: "#D4C5B7",
          400: "#A99588",
          500: "#79665E",
          600: "#604B45",
          700: "#4A332F",
          800: "#351F1C",
          900: "#261412",
          950: "#170B0A",
        },

        gold: {
          50: "#FFFBEF",
          100: "#FAF1D5",
          200: "#F2DFA8",
          300: "#E7CA78",
          400: "#DDB858",

          // Main Irfan & Irfan gold
          500: "#D4AF4C",

          600: "#B99135",
          700: "#957126",
          800: "#75551D",
          900: "#5D431A",
        },

        /*
         * New semantic brand colors.
         * We can use these in new sections going forward.
         */
        brand: {
          burgundy: "#9D352D",
          red: "#A23830",
          dark: "#74241F",
          darker: "#541915",
          deepest: "#32110F",

          gold: "#D4AF4C",
          "gold-light": "#E2C56F",

          cream: "#F8F4ED",
          ivory: "#FFFDF9",

          ink: "#211816",
        },
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },

      boxShadow: {
        "brand-soft": "0 20px 60px rgba(74, 20, 17, 0.12)",
        "brand-medium": "0 24px 70px rgba(74, 20, 17, 0.20)",
        "gold-soft": "0 15px 40px rgba(212, 175, 76, 0.15)",
      },

      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },

  plugins: [],
};