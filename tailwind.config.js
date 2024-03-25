/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,ts,vue}'
  ],
  theme: {
    colors: {
      'plantea-white-smoke-500': '#F5F5F5',
      'plantea-silver-500': '#CCCCCC',
      'plantea-battle-gray-500': '#757C73',
      'plantea-limeade-green-500': '#ccff99',
      'plantea-fern-green-500': '#336633',
      'plantea-crusoe-green-500': '#003300',
      'plantea-heavy-metal-500': '#2E382A'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Courier Prime, Courier, monospace', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms') ({
      //strategy: 'class', // only generate classes
    })
  ],
}

/* .font-mono {
  font-family:Courier Prime,Courier,monospace
}
.font-serif {
  font-family:Self Modern,serif
}
.font-sans {
  font-family:Sunset Gothic,Helvetica Neue LT Std,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,sans-serif
}
.font-blackletter {
  font-family:Colchester,serif
} */

