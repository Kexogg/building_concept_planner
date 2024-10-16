/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          50: 'rgb(23, 2, 2)',
          100: 'rgb(47, 4, 4)',
          200: 'rgb(93, 9, 9)',
          300: 'rgb(140, 13, 13)',
          400: 'rgb(187, 17, 17)',
          500: 'rgb(233, 22, 22)',
          600: 'rgb(238, 68, 68)',
          700: 'rgb(242, 115, 115)',
          800: 'rgb(246, 162, 162)',
          900: 'rgb(251, 208, 208)',
          950: 'rgb(253, 232, 232)',
        },
        'background': {
          50: 'rgb(20, 5, 5)',
          100: 'rgb(41, 10, 10)',
          200: 'rgb(82, 20, 20)',
          300: 'rgb(122, 31, 31)',
          400: 'rgb(163, 41, 41)',
          500: 'rgb(204, 51, 51)',
          600: 'rgb(214, 92, 92)',
          700: 'rgb(224, 133, 133)',
          800: 'rgb(235, 173, 173)',
          900: 'rgb(245, 214, 214)',
          950: 'rgb(250, 235, 235)',
        },
        'primary': {
          50: 'rgb(21, 4, 4)',
          100: 'rgb(43, 8, 8)',
          200: 'rgb(86, 16, 16)',
          300: 'rgb(129, 24, 24)',
          400: 'rgb(171, 33, 33)',
          500: 'rgb(214, 41, 41)',
          600: 'rgb(222, 84, 84)',
          700: 'rgb(231, 126, 126)',
          800: 'rgb(239, 169, 169)',
          900: 'rgb(247, 212, 212)',
          950: 'rgb(251, 234, 234)',
        },
        'secondary': {
          50: 'rgb(26, 0, 0)',
          100: 'rgb(51, 0, 0)',
          200: 'rgb(102, 0, 0)',
          300: 'rgb(153, 0, 0)',
          400: 'rgb(204, 0, 0)',
          500: 'rgb(255, 0, 0)',
          600: 'rgb(255, 51, 51)',
          700: 'rgb(255, 102, 102)',
          800: 'rgb(255, 153, 153)',
          900: 'rgb(255, 204, 204)',
          950: 'rgb(255, 229, 229)',
        },
        'accent': {
          50: 'rgb(26, 0, 0)',
          100: 'rgb(51, 0, 0)',
          200: 'rgb(102, 0, 0)',
          300: 'rgb(153, 0, 0)',
          400: 'rgb(204, 0, 0)',
          500: 'rgb(255, 0, 0)',
          600: 'rgb(255, 51, 51)',
          700: 'rgb(255, 102, 102)',
          800: 'rgb(255, 153, 153)',
          900: 'rgb(255, 204, 204)',
          950: 'rgb(255, 229, 229)',
        },
      },

    },
  },
  plugins: [],
}

