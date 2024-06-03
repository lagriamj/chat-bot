/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.vue",
    './src/**/*.html',
    './src/**/*.jsx',
    './src/index.css',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      mostWidest: '.50em',
    },
    extend: {
      colors: {
        'main': '#0c0c1d',
        'secondary': '#334D66',
        'lightgrey': 'rgb(211, 211, 211)',
      },
      borderRadius: {
        'custom-bl': '60%',
        'custom-tl': '4%',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'sans-semi': ['Poppins Semibold', 'sans-serif'],
      },
      screens: {
        'mediumLg' : '1366px',
        'gotoLarge' : '1400px',
        'large' : '1530px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('daisyui')],
}

