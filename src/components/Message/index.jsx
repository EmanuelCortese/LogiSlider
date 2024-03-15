import messageImg from '@/assets/message.png'
import { ModalMessage } from '@/components/ModalMessage'
import SliderContext from '@/context/SliderContext'
import { useAnimationStatus } from '@/hooks/useAnimationStatus'
import { useContext } from 'react'

export const PopupMessage = () => {
	const {
		state: { modal },
	} = useContext(SliderContext)
	const { animationStatus } = useAnimationStatus()

	return (
		<>
			<ModalMessage />
			<button
				className={`w-10 h-10 z-10 fixed bottom-4 right-14 tablet:right-28 tablet:h-16 tablet:w-16 desktop:right-[150px] ${
					modal ? 'animate-hideButton' : 'animate-showButton'
				}`}
				onClick={animationStatus}
			>
				<img src={messageImg} className='w-full h-full' alt='Message image' />
			</button>
		</>
	)
}
