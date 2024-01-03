import { useContext } from 'react'
import SliderContext from '../context/SliderContext'

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
