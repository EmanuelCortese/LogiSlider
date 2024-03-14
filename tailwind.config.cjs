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
				showModal: {
					'0%': { opacity: '0', transform: 'scale(0)' },
					'1%': { opacity: '0', transform: 'scale(.1)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				hideModal: {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'99%': { opacity: '0', transform: 'scale(.1)' },
					'100%': { opacity: '0', transform: 'scale(0)' },
				},
				showButton: {
					'0%': { transform: 'scale(0)', bottom: '0', opacity: '0' },
					'1%': { transform: 'scale(1)', bottom: '0', opacity: '0' },
					'100%': { bottom: '16px', opacity: '1' },
				},
				hideButton: {
					'0%': { transform: 'scale(1)', bottom: '16px', opacity: '1' },
					'1%': { transform: 'scale(1)', bottom: '0', opacity: '0' },
					'100%': { transform: 'scale(0)', bottom: '0', opacity: '0' },
				},
			},
			animation: {
				leftDottedCircleRotate: 'leftDottedCircleRotate 1.2s linear infinite',
				rightDottedCircleRotate: 'rightDottedCircleRotate 1.2s linear infinite',
				translateFirstArrowLeft: 'translateFirstArrowLeft .10s ease-out',
				translateSecondArrowLeft: 'translateSecondArrowLeft .20s ease-in',
				translateFirstArrowRight: 'translateFirstArrowRight .20s ease-in',
				translateSecondArrowRight: 'translateSecondArrowRight .10s ease-out',
				showModal: 'showModal .4s cubic-bezier(.62,.28,.23,.99) forwards',
				hideModal: 'hideModal .4s cubic-bezier(.62,.28,.23,.99) forwards',
				showButton: 'showButton .4s cubic-bezier(.62,.28,.23,.99) forwards',
				hideButton: 'hideButton .4s cubic-bezier(.62,.28,.23,.99) forwards',
			},
			height: {
				'1/2': '2px',
			},
			width: {
				98: '26rem',
				100: '28rem',
			},
			inset: {
				17: '5rem',
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
			fontFamily: {
				LLBrown: ['LL-Brown'],
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
		screens: {
			mobile: '320px',
			tablet: '768px',
			laptop: '1024px',
			desktop: '1440px',
		},
	},
	plugins: [],
}
