/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: require('./src/assets/commons/theme/screens'),
    spacing: require('./src/assets/commons/theme/spacing'),
    inset: require('./src/assets/commons/theme/spacing'),
    colors: require('./src/assets/commons/theme/colors'),
    fontWeight: require('./src/assets/commons/theme/fontWeight'),
    fontSize: require('./src/assets/commons/theme/spacing'),
    borderRadius: require('./src/assets/commons/theme/spacing'),
    lineHeight: require('./src/assets/commons/theme/spacing'),
    letterSpacing: require('./src/assets/commons/theme/spacing'),
    zIndex: require('./src/assets/commons/theme/zIndex'),
    maxWidth: require('./src/assets/commons/theme/spacing'),
    minWidth: require('./src/assets/commons/theme/spacing'),
    maxHeight: require('./src/assets/commons/theme/spacing'),
    minHeight: require('./src/assets/commons/theme/spacing'),
    display: require('./src/assets/commons/theme/display'),
    dropShadow: require('./src/assets/commons/theme/dropShadow'),
  },
  plugins: [],
};
