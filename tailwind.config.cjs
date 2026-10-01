module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors: { midnight: '#070b1a', midnightLight: '#0f172a', gold: 'rgb(var(--accent-blue-channels) / <alpha-value>)', goldLight: 'rgb(var(--accent-blue-light-channels) / <alpha-value>)' },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Montserrat', 'sans-serif'] }
    }
  }
};
