import './App.css'

import { Button } from './components/Button'
import ContentSlide from './components/ContentSlide'
import { Header } from './components/Header'
import { PopupMessage } from './components/Message'
import { useSlide } from './hooks/useSlide'
import { Pause } from './icons/Pause'
import { Play } from './icons/Play'

function App() {
	const { isPlaying, slider, previous, next, handleButton } = useSlide()

	return (
		<div className='h-screen w-screen flex items-center relative overflow-hidden'>
			<Header />
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
			<PopupMessage />
			<button
				onClick={handleButton}
				className='flex items-center justify-center absolute bottom-6 right-6 h-10 w-10 z-10 bg-zinc-400/80 border-2 rounded-full border-zinc-800/80 hover:bg-zinc-400 transition-colors duration-500'
			>
				{isPlaying ? <Pause /> : <Play />}
			</button>
		</div>
	)
}

export default App
