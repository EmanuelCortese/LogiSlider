import { useRef } from 'react'

export const useVisibility = () => {
	const tag = useRef()

	const visibility = (e) => {
		const valueLength = e.target.value.length
		if (valueLength > 0) {
			tag.current.style.opacity = '1'
		} else {
			tag.current.style.opacity = '0'
		}
	}

	return { tag, visibility }
}
