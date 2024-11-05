/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
	fontFamily: {
		simonetta: ["Simonetta", "serif"],
	},
	fontSize: {
		xs: ['0.875rem', { lineHeight: '1.25rem' }],
		sm: ['1rem', { lineHeight: '1.5rem' }],
		base: ['1.125rem', { lineHeight: '1.75rem' }],
		lg: ['1.25rem', { lineHeight: '1.75rem' }],
		'xl': ['1.5rem', { lineHeight: '2rem' }],
		'2xl': ['1.875rem', { lineHeight: '2.25rem' }],
		'3xl': ['2.25rem', { lineHeight: '2.5rem' }],
		'4xl': ['3rem', { lineHeight: '1' }],
		'5xl': ['3.75rem', { lineHeight: '1' }],
		'6xl': ['4.5rem', { lineHeight: '1' }],
		'7xl': ['6rem', { lineHeight: '1' }],
		'8xl': ['8rem', { lineHeight: '1' }],
	},
  	extend: {
		keyframes: {
			"caret-blink": {
				"0%,70%,100%": { opacity: "1"},
				"20%,50%": { opacity: "0"},
			},
		},
		animation: {
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

