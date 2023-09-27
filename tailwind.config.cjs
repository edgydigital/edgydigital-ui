/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './storybook/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      0: '0',
      x: '4px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      11: '88px',
      12: '96px',
      13: '104px',
      14: '112px',
      15: '120px'
    },
    screens: {
      small: '320px',
      phone: '480px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1200px',
      large: '1201px'
    },

    extend: {
      colors: {
        primaryBg: '#FFFFFF',
        secondaryBg: '#F0F0F0',
        primaryAccent: '#CC354B',
        primaryText: '#161616',
        secondaryText: '#424242',
        button: '#161616',
        systemInterface: '#000000',
        modalOverlay: '#00000050',
        darkPrimaryBg: '#282828',
        darkSecondaryBg: '#333333',
        darkPrimaryAccent: '#CC354B',
        darkPrimaryText: '#F0F0F0',
        darkSecondaryText: '#A5A5A5',
        darkButtton: '#363636',
        darkSystemInterface: '#FFFFFF',
        darkModalInterface: '#00000050',
        gray100: '#FFFFFF',
        gray95: '#F1F1F1',
        gray90: '#E6E6E6',
        gray85: '#D9D9D9',
        gray75: '#BFBFBF',
        gray65: '#A6A6A6',
        gray50: '#808080',
        gray39: '#636363',
        gray28: '#474747',
        gray15: '#262626',
        gray0: '#000000',
        informationalSuccess: '#499771',
        informationalError: '#A72323',
        informationalWarning: '#C9A72D'
      },
      borderRadius: {
        extraSmall: '2px',
        semiSmall: '4px',
        small: '8px',
        medium: '16px',
        semiLarge: '32px',
        large: '64px',
        extraLarge: '128px',
        full: '999px'
      },
      boxShadow: {
        default1: '0px 40px 16px 0px rgba(0,0,0,0.01)',
        default2: '0px 22px 13px 0px rgba(0,0,0,0.03)',
        default3: '0px 10px 10px 0px rgba(0,0,0,0.09)',
        default4: '0px 2px 5px 0px rgba(0,0,0,0.05)',
        checkBox: '0px 0px 0px 4px #E9E9E9'
      },
      borderWidth: {
        0: '0',
        1: '1px',
        2: '2px'
      },
      transitionProperty: {
        'max-height': 'max-height',
        bg: 'background-color'
      },
    }
  }
}
