module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors: { midnight: 'rgb(var(--brand-navy-channels) / <alpha-value>)', midnightLight: 'rgb(var(--brand-surface-rgb) / <alpha-value>)', gold: 'rgb(var(--brand-gold-channels) / <alpha-value>)', goldLight: 'rgb(var(--brand-gold-light-rgb) / <alpha-value>)', white: 'rgb(var(--brand-ivory-rgb) / <alpha-value>)', gray: { 300: '#e7dfc8', 400: '#d6c391', 500: '#c1b18c', 600: '#c1b18c', 800: '#52605f', 900: '#52605f' } },
      fontFamily: { sans: ['Montserrat', 'sans-serif'], serif: ['Montserrat', 'sans-serif'] }
    }
  }
};

