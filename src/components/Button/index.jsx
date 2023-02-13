import { useRef } from 'react'

export const Button = (props) => {
	const circle = useRef(null)

	const changeMouseOverR = () => {
		circle.current.setAttribute('r', 120)
		circle.current.style.opacity = '.7'
		circle.current.style.transition = 'all .4s ease'
	}
	const changeMouseLeaveR = () => {
		circle.current.setAttribute('r', 111)
		circle.current.style.opacity = '.25'
		circle.current.style.transition = 'all .4s ease'
	}
	return (
		<svg
			className={`absolute ${props.position} w-20 h-20 cursor-pointer group`}
			viewBox='0 0 266 266'
			x='0px'
			y='0px'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			onMouseOver={() => changeMouseOverR()}
			onMouseLeave={() => changeMouseLeaveR()}
		>
			<circle cx='133' cy='133' r='111' ref={circle} className='opacity-25' />
			<g>
				<rect x={props.barX} y={props.barY} width='6' height='40' fill='#FFFFFF'></rect>
				<path
					className={`absolute ${props.animateSecondArrow}`}
					fill='#FFFFFF'
					d='M157.2,138.2v10.7l-21.3-16l21.3-16v10.7'
					// eslint-disable-next-line react/no-unknown-property
					transform-origin={props.origin}
					transform={props.location1}
				></path>
				<path
					className={`absolute ${props.animateFirstArrow}`}
					fill='#FFFFFF'
					d='M157.2,138.2v10.7l-21.3-16l21.3-16v10.7'
					// eslint-disable-next-line react/no-unknown-property
					transform-origin={props.origin}
					transform={props.location2}
				></path>
			</g>
			<circle
				className={`origin-center ${props.animatedDottedCircle}`}
				fill='none'
				stroke='#FFFFFF'
				strokeWidth={3}
				strokeDasharray='0,12.0963'
				strokeLinecap='round'
				strokeMiterlimit='10'
				cx='133'
				cy='133'
				r='82'
			/>
		</svg>
	)
}
