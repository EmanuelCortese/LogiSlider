import { useContext } from 'react'
import Context from '../context/IndexContext'

export const useAnimationStatus = () => {
	const { setModal } = useContext(Context)

	const animationStatus = () => {
		setModal((modal) => !modal)
	}

	return { animationStatus }
}
