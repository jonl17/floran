module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4a9151',
        secondary: '#f2efea',
      },
      fontFamily: {
        sarvatrik: ['Sarvatrik'],
        silkscreen: ['Silkscreen', 'cursive'],
      },
      fontSize: {
        parag: '1.25rem',
        paragDesktop: '1.5rem',
        heading: '1.75rem',
        headingDesktop: '2.5rem',
      },
      backgroundImage: {
        'green-gradient':
          'linear-gradient(180deg, rgba(60,129,71,1) 7%, rgba(49,98,32,1) 100%);',
      },
    },
  },
  plugins: [],
}
