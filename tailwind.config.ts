import {
  border,
  fontFamily,
  fontSize,
  fontWeight,
  generatedColors,
  radius,
  screens,
  shadow,
  sizes
} from './src/styles/theme/index'

import { withTV } from 'tailwind-variants/transformer'

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '!./node_modules'],
  theme: {
    screens,
    fontSize,
    fontWeight,
    fontFamily,
    size: sizes,
    spacing: sizes,
    boxShadow: shadow,
    borderWidth: border,
    borderRadius: radius,
    lineHeight: fontSize,
    letterSpacing: fontSize,
    extend: { colors: generatedColors, maxWidth: sizes }
  }
})
