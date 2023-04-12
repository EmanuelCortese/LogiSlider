import { useEffect, useRef } from 'react'
import { TIMER_SLIDE } from '../utils/constants'

export const useSlide = () => {
	const slider = useRef()

	let interval = null

	const autoplay = () => {
		clearInterval(interval)
		interval = setInterval(previous, TIMER_SLIDE)
	}

	useEffect(() => {
		autoplay()
	}, [])

	const previous = () => {
		autoplay()
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

	const next = () => {
		autoplay()
		const sliderWidth = slider.current.offsetWidth
		slider.current.style.transform = `translateX(-${sliderWidth}px)`
		slider.current.style.transition = 'transform .5s ease-out'

		const transition = () => {
			const firstElement = slider.current.firstChild
			const lastElement = slider.current.lastChild

			lastElement.after(firstElement)
			slider.current.style.transform = `translateX(0)`
			slider.current.style.transition = 'none'
			slider.current.removeEventListener('transitionend', transition)
		}

		slider.current.addEventListener('transitionend', transition)
	}

	return { slider, previous, next }
}
