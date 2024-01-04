import SliderContext from '@/context/SliderContext'
import { useContext } from 'react'

export const useAnimationStatus = () => {
	const {
		state: { modal },
		dispatch,
	} = useContext(SliderContext)

	const animationStatus = () => {
		dispatch({ type: 'update_modal', payload: !modal })
	}

	return { animationStatus }
}
