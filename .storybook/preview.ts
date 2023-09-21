import type {Preview} from '@storybook/react'
// import 'tailwindcss/tailwind.css'
import '../src/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    viewport: {
      defaultViewport: 'Default',
      viewports: {
        small: {
          name: 'Small',
          styles: {
            width: '320px',
            height: '100%'
          }
        },
        phone: {
          name: 'Phone',
          styles: {
            width: '480px',
            height: '100%'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '100%'
          }
        },
        iphone14mini: {
          name: 'iPhone 14 Mini',
          styles: {width: '375px', height: '630px'}
        },
        iphone13pro: {
          name: 'iPhone 13 Pro',
          styles: {width: '390px', height: '844px'}
        }
      }
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
