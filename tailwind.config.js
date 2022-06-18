module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        waves: 'https://raw.githubusercontent.com/BossDaily/My-Portfolio/main/public/stats_bottom_wave1.svg'
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
