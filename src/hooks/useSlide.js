import { useEffect, useRef } from 'react'
import { TIMER_SLIDE } from '../utils/constants'

export const useSlide = () => {
	const slider = useRef()

	const previous = () => {
		const sliderWidth = slider.current.offsetWidth
		const firstElement = slider.current.firstChild
		const lastElement = slider.current.lastChild

		firstElement.before(lastElement)
		slider.current.style.transform = `translateX(-${sliderWidth}px)`
		slider.current.style.transition = 'none'

		setTimeout(() => {
			slider.current.style.transition = 'transform .5s ease-out'
			slider.current.style.transform = `translateX(0)`
		}, 30)
	}

	useEffect(() => {
		const interval = setInterval(previous, TIMER_SLIDE)
		return () => clearInterval(interval)
	}, [])

	return { slider, previous }
}
