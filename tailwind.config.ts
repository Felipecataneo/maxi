// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Ensure Tailwind scans your app and components files
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other directories if you have Tailwind classes there (e.g., lib)
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Keep any other extensions you might add later
      // Add your custom animations here
      animation: {
        'slide-right': 'slideRight 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        // Add other animations if needed, or rely on tw-animate-css for others
        // 'fade-in': 'fadeIn 0.5s ease-out', // Example if you wanted to define fade-in here instead of from tw-animate-css
      },
      // Add your custom keyframes here
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
         // Add other keyframes if defining custom animations above
         // fadeIn: { // Example keyframe for fade-in
         //   '0%': { opacity: '0' },
         //   '100%': { opacity: '1' },
         // }
      },
       // Add other theme extensions (colors, fonts, etc.) if needed
      colors: { // Example: keeping consistency with shadcn/ui setup
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Add your custom color variables if you want to use them directly
        // as Tailwind color classes (e.g., text-section-background)
         'section-background': 'var(--section-background)',
         'accent-blue': 'var(--accent-blue)',
      },
       borderRadius: { // Example: keeping consistency with shadcn/ui setup
         lg: `var(--radius)`,
         md: `calc(var(--radius) - 2px)`,
         sm: `calc(var(--radius) - 4px)`,
         xl: `calc(var(--radius) + 4px)`,
       },
       // You might define font families here if you weren't using CSS variables directly
       // fontFamily: {
       //   sans: ["var(--font-geist-sans)", "sans-serif"],
       //   mono: ["var(--font-geist-mono)", "monospace"],
       //   serif: ["var(--font-georgia)", "serif"], // Assuming you add a serif font variable
       // },
       // Add other theme extensions if needed
    },
  },
   // Add your plugins here. tw-animate-css is imported via CSS,
   // so it doesn't need to be listed here unless used as a JS plugin.
   plugins: [
     // require("tw-animate-css"), // Only if the plugin requires JS inclusion
   ],
};

export default config;