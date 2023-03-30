/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'text-amber-500',
    'text-emerald-500',
    'text-blue-500',
    'text-red-500',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-blue-500',
    'bg-red-500',
    'bg-amber-50',
    'bg-emerald-50',
    'bg-blue-50',
    'bg-red-50',
    'border-amber-500',
    'border-emerald-500',
    'border-blue-500',
    'border-red-500',
  ],
};
