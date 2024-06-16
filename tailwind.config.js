/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    // listStyleType: {
    //   // square: 'square',
    //   // roman: 'upper-roman',
    // },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        maroon: {
          DEFAULT: '#800000', // Nilai hex untuk warna merah marun
        },
        darkyellow: {
          DEFAULT: '#DAA520', // Nilai hex untuk warna kuning tua
        },
      },
      fontVariantNumeric: {
        normal: 'normal',
        ordinal: 'ordinal',
        'slashed-zero': 'slashed-zero',
        'lining-nums': 'lining-nums',
        'oldstyle-nums': 'oldstyle-nums',
        'proportional-nums': 'proportional-nums',
        'tabular-nums': 'tabular-nums',
        'diagonal-fractions': 'diagonal-fractions',
        'stacked-fractions': 'stacked-fractions',
      },

      letterSpacing: {
        'tight': '-0.02em',
        'normal': '0',
        'wide': '0.1em',
        'wider': '0.2em',
        'widest': '0.3em',
      },

      lineClamp: {
        7: '7',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },

      textDecorationThickness: {
        'auto': 'auto',
        'from-font': 'from-font',
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  variants: {
    fontVariantNumeric: ['responsive', 'focus', 'hover'],
    extend: {
      textDecorationThickness: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.decoration-thickness-auto': {
          'text-decoration-thickness': 'auto',
        },
        '.decoration-thickness-from-font': {
          'text-decoration-thickness': 'from-font',
        },
        '.decoration-thickness-0': {
          'text-decoration-thickness': '0px',
        },
        '.decoration-thickness-1': {
          'text-decoration-thickness': '1px',
        },
        '.decoration-thickness-2': {
          'text-decoration-thickness': '2px',
        },
        '.decoration-thickness-4': {
          'text-decoration-thickness': '4px',
        },
        '.decoration-thickness-8': {
          'text-decoration-thickness': '8px',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    },
  ],
}

