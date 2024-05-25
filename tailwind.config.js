/** @type {import('tailwindcss').Config} */
import Typography from "@tailwindcss/typography";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slowHover : {
          '0%' : {backgroundColor: 'white'},
          '100%': {backgroundColor: 'cyan'}
        }
      },
      transition :{
        slowHover: 'slowHover 0.5s '
      }
    },
  },
  plugins: [
      Typography,
      // require('@tailwindcss/typography'),
  ],
  // corePlugins: {
  //   preflight: false
  // }
}
// export const corePlugins = {
//   preflight: false
// }
