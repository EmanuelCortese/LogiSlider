import './App.css'

import { Button } from './components/Button'
import ContentSlide from './components/ContentSlide'
import { useSlide } from './hooks/useSlide'

function App() {
	const { slider, previous, next } = useSlide()

	return (
		<div className='h-screen w-screen flex items-center relative overflow-hidden'>
			<Button
				animatedDottedCircle='group-hover:animate-leftDottedCircleRotate'
				animateFirstArrow='group-hover:animate-translateFirstArrowLeft'
				animateSecondArrow='group-hover:animate-translateSecondArrowLeft'
				location1='translate(0,0)'
				location2='translate(-22,0)'
				previousPage={previous}
				isLeft
			/>
			<ContentSlide refSlide={slider} />
			<Button
				animatedDottedCircle='group-hover:animate-rightDottedCircleRotate'
				animateFirstArrow='group-hover:animate-translateFirstArrowRight'
				animateSecondArrow='group-hover:animate-translateSecondArrowRight'
				location1='translate(288,0), rotate(180)'
				location2='translate(266,0), rotate(180)'
				nextPage={next}
			/>
		</div>
	)
}

export default App
