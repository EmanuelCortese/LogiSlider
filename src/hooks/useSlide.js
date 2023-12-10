import { useContext, useEffect, useRef } from 'react'
import { mediaList } from '../components/mediaList'
import Context from '../context/IndexContext'
import { TIMER_SLIDE } from '../utils/constants'

export const useSlide = () => {
	const slider = useRef()
	const { index, setIndex } = useContext(Context)

	useEffect(() => {
		const interval = setInterval(previous, TIMER_SLIDE)

		return () => clearInterval(interval)
	}, [index])

	const previous = () => {
		setIndex((index) => {
			if (index === 0) return mediaList.length - 1
			return index - 1
		})

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
		setIndex((index) => {
			if (index >= mediaList.length - 1) return 0
			return index + 1
		})
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
