import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          foreground: "hsl(var(--teal-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 12px)",
        "3xl": "calc(var(--radius) + 20px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"]
      },
      fontSize: {
        "display": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }]
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 42, 76, 0.08), 0 8px 24px -8px rgba(15, 42, 76, 0.10)",
        card: "0 4px 16px -4px rgba(15, 42, 76, 0.10), 0 16px 40px -12px rgba(15, 42, 76, 0.12)",
        glow: "0 0 0 1px rgba(13, 148, 136, 0.12), 0 12px 40px -12px rgba(13, 148, 136, 0.35)",
        "glow-blue": "0 0 0 1px rgba(37, 99, 235, 0.12), 0 12px 40px -12px rgba(37, 99, 235, 0.35)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(15,42,76,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,42,76,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.10), transparent 60%)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "blob": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "wave": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "blob": "blob 18s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 14s linear infinite",
        "shimmer": "shimmer 1.8s infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
