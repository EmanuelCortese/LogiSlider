import { useContext } from 'react'
import messageImg from '../../assets/message.png'
import SliderContext from '../../context/SliderContext'
import { useAnimationStatus } from '../../hooks/useAnimationStatus'
import { ModalMessage } from '../ModalMessage'

export const PopupMessage = () => {
	const {
		state: { modal },
	} = useContext(SliderContext)
	const { animationStatus } = useAnimationStatus()

	return (
		<>
			<ModalMessage />
			<button
				className={`h-16 w-16 z-10 fixed bottom-4 right-[150px] ${
					modal ? 'animate-hideButton' : 'animate-showButton'
				}`}
				onClick={animationStatus}
			>
				<img src={messageImg} className='w-full h-full' alt='Message image' />
			</button>
		</>
	)
}
