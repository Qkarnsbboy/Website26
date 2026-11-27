/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        charcoal: '#141716', // page background
        ink: '#ECEAE3', // main text
        muted: '#A3ABA6', // labels, tags, secondary text
        rule: '#2E3532', // thin lines between rows
        'rule-strong': '#4A524E', // main dividing lines
        felt: '#5FBF8A', // poker-green accent, used sparingly
      },
    },
  },
  plugins: [],
};
