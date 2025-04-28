// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // Mantenha as animações existentes se ainda as usar
        'slide-right': 'slideRight 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        // Adicione a nova animação fade-in AQUI
        'fade-in': 'fadeIn 0.8s ease-out forwards', // Adicionado
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Adicione os novos keyframes fadeIn AQUI
        fadeIn: { // Adicionado
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
       // Add other theme extensions (colors, fonts, etc.) if needed
      colors: {
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
         'section-background': 'var(--section-background)',
         'accent-blue': 'var(--accent-blue)',
      },
       borderRadius: {
         lg: `var(--radius)`,
         md: `calc(var(--radius) - 2px)`,
         sm: `calc(var(--radius) - 4px)`,
         xl: `calc(var(--radius) + 4px)`,
       },
       fontFamily: {
        // Opcional: Mantenha 'sans' apontando para a variável Inter se quiser usar 'font-sans'
        // sans: ["var(--font-geist-sans)", "sans-serif"],
        // Opcional: Adicione 'mono' e 'serif' se definiu variáveis para eles
        // mono: ["var(--font-geist-mono)", "monospace"],
        // serif: ["var(--font-georgia)", "serif"],

        // Defina a nova família de fontes para os títulos
        heading: ["var(--font-heading)", "sans-serif"], // Use a variável --font-heading, com fallback sans-serif
      }
    },
  },
   plugins: [], // Mantenha seus plugins aqui
};

export default config;