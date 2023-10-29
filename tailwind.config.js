/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['figtree']
      },
      colors: {
        textPrimary: '#FEFCDD',
        textDenim: '#0E73AE',
        textKillarney: '#52734D',
        sunglow: '#FFC93C',
        mustard: '#FFD95A',
        woodsmkoke: '#2C3333',
        pageColor: 'rgba(255, 201, 60, 0.50)',
        silver: '#BFBFBF',
        alabaster: '#F7F7F2',
        mahogany: '#CB3434',
        khaki: '#FOE68C',
        lemonChiffon: '#FFFACD',
        laPalma: '#419828',
        yellowGreen: '#71CB36',
        darkGolden: '#C07F00',
        blueBayoux: '#66717E',
        madison: '#2B3A55'
      }
    },
  },
  plugins: [],
}

