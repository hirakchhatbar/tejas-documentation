/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Sora", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        'doc-accordion': '2fr 4fr',
      },
      colors: {
        transparent: "transparent",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        success: "hsl(var(--success))",
        error: "hsl(var(--error))",
        heading: "hsl(var(--foreground))",
        body: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        "float-node": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.85" },
          "33%": { transform: "translate(2px, -3px) scale(1.1)", opacity: "1" },
          "66%": { transform: "translate(-1px, 2px) scale(0.95)", opacity: "0.9" },
        },
        "line-pulse": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.5" },
        },
        "error-caught": {
          "0%": { opacity: "0.9", transform: "scale(1) translate(0, 0)" },
          "50%": { opacity: "0.5", transform: "scale(0.7) translate(2px, 2px)" },
          "100%": { opacity: "0.9", transform: "scale(1) translate(0, 0)" },
        },
        "flow-line-opacity": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
        "flow-dash": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-100" },
        },
        "flow-blip": {
          "0%, 100%": { opacity: "0.6", transform: "translate(-50%, -50%) scale(0.85)" },
          "50%": { opacity: "1", transform: "translate(-50%, -50%) scale(1.15)" },
        },
        "error-absorbed": {
          "0%": { opacity: "0.9", transform: "translate(-50%, -50%) translateX(4.375rem) scale(1)" },
          "70%": { opacity: "0.4", transform: "translate(-50%, -50%) translateX(0.5rem) scale(0.5)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) translateX(0) scale(0.2)" },
        },
        "server-pulse": {
          "0%, 100%": { opacity: "0.9", transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: "1", transform: "translate(-50%, -50%) scale(1.08)" },
        },
        "route-param": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "route-dot": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-76" },
        },
        "response-ray": {
          "0%": { opacity: "0", transform: "scale(0.4)" },
          "35%": { opacity: "0.7", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.3)" },
        },
        "autodoc-scan": {
          "0%": { top: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "autodoc-line-reveal": {
          "0%": { opacity: "0", transform: "translateX(4px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "rate-allow": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-84" },
        },
        "rate-block": {
          "0%, 100%": { strokeDashoffset: "0", opacity: "0" },
          "8%": { strokeDashoffset: "0", opacity: "0.7" },
          "55%": { strokeDashoffset: "-35", opacity: "0.7" },
          "70%": { strokeDashoffset: "-35", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "float-node": "float-node 3s ease-in-out infinite",
        "line-pulse": "line-pulse 2.5s ease-in-out infinite",
        "error-caught": "error-caught 2.2s ease-in-out infinite",
        "flow-line-opacity": "flow-line-opacity 3s ease-in-out infinite",
        "flow-dash": "flow-dash 4s linear infinite",
        "flow-blip": "flow-blip 2s ease-in-out infinite",
        "error-absorbed": "error-absorbed 2.5s ease-in infinite",
        "server-pulse": "server-pulse 2.2s ease-in-out infinite",
        "route-param": "route-param 2s ease-in-out infinite",
        "route-dot": "route-dot 2.5s linear infinite",
        "response-ray": "response-ray 2.4s ease-out infinite",
        "autodoc-scan": "autodoc-scan 2.5s ease-in-out infinite",
        "autodoc-line-reveal": "autodoc-line-reveal 0.5s ease-out forwards",
        "rate-allow": "rate-allow 3s linear infinite",
        "rate-block": "rate-block 3.5s ease-in-out infinite",
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
