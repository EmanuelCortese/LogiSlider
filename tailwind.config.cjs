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
		},
	},
	plugins: [],
}
