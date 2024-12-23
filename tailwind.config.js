/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,scss}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
				background: 'var(--bg-color)',
				'primary-btn': 'var(--primary-button)',
				'primary-btn-hover': 'var(--primary-button-hover)',
				'secondary-btn': 'var(--secondary-button)',
				'secondary-btn-hover': 'var(--secondary-button-hover)',
				'preloader-primary': 'var(--preloader-primary)',
				'preloader-secondary': 'var(--preloader-secondary)',
			},
      borderColor: {
        primary: 'var(--primary-border)',
        secondary: 'var(--secondary-border)'
      },
      textColor: {
				default: 'var(--text-color)',
				disable: 'var(--disable-text-color)'
			},
    },
  },
  plugins: [],
}
