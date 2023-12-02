/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				leftDottedCircleRotate: {
					'0%': { transform: 'rotate(90deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				rightDottedCircleRotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(90deg)' },
				},
				translateFirstArrowLeft: {
					'0%': { transform: 'translateX(42px)' },
					'100%': { transform: 'translateX(0px)' },
				},
				translateSecondArrowLeft: {
					'0%': { transform: 'translateX(52px)' },
					'100%': { transform: 'translateX(0px)' },
				},
				translateFirstArrowRight: {
					'0%': { transform: 'translateX(214px) rotate(180deg)' },
					'100%': { transform: 'translateX(266px) rotate(180deg)' },
				},
				translateSecondArrowRight: {
					'0%': { transform: 'translateX(224px) rotate(180deg)' },
					'100%': { transform: 'translateX(288px) rotate(180deg)' },
				},
			},
			animation: {
				leftDottedCircleRotate: 'leftDottedCircleRotate 1.2s linear infinite',
				rightDottedCircleRotate: 'rightDottedCircleRotate 1.2s linear infinite',
				translateFirstArrowLeft: 'translateFirstArrowLeft .10s ease-out',
				translateSecondArrowLeft: 'translateSecondArrowLeft .20s ease-in',
				translateFirstArrowRight: 'translateFirstArrowRight .20s ease-in',
				translateSecondArrowRight: 'translateSecondArrowRight .10s ease-out',
			},
			height: {
				'1/2': '2px',
			},
			width: {
				98: '26rem',
				100: '28rem',
			},
			inset: {
				'0.6/5': '12%',
				'0.7/5': '14%',
				'0.8/5': '16%',
				'0.9/5': '18%',
				'1/5': '20%',
				'1.1/5': '22%',
				'1.2/5': '24%',
				'2/5': '40%',
				'2.2/5': '44%',
				'2.6/5': '52%',
			},
			fontSize: {
				'base-sm': '0.945rem',
				'2.5xl': '1.75rem',
				'5.3xl': '3.17rem',
			},
			colors: {
				'logi-blue': '#00B8FC',
			},
		},
	},
	plugins: [],
}
