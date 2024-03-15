import LogitechMessage from '@/assets/Logitech_logo_message.png'
import SliderContext from '@/context/SliderContext'
import { useAnimationStatus } from '@/hooks/useAnimationStatus'
import { useChangeBorder } from '@/hooks/useChangeBorder'
import { useVisibility } from '@/hooks/useVisibility'
import { Close } from '@/icons/Close'
import { Plus } from '@/icons/Plus'
import { Send } from '@/icons/Send'
import '@/index.css'
import { autoAdjustRows } from '@/utils/autoAdjustRows'
import { BLUR_TEXTAREA_STYLE, FOCUS_TEXTAREA_STYLE, ROWS } from '@/utils/constants'
import { dateFormatter } from '@/utils/dateFormatter'
import { useContext, useRef } from 'react'

export const ModalMessage = () => {
	const form = useRef()

	const {
		state: { modal },
	} = useContext(SliderContext)

	const { addBorder, removeBorder } = useChangeBorder({ ref: form })
	const { visibility, tag } = useVisibility()
	const { animationStatus } = useAnimationStatus()

	const ANIMATE_CONDITION = modal ? 'animate-showModal' : modal !== null && 'animate-hideModal'

	return (
		<div
			className={`flex flex-col gap-y-4 w-full h-full bottom-0 right-0 fixed z-30 bg-[#FFFFFF]  shadow-[0_0_12px_rgba(0,0,0,.15)] font-sans ${ANIMATE_CONDITION} origin-bottom-right delay-1000 opacity-0 scale-0 tablet:w-[365px] tablet:h-[490px] tablet:right-32 tablet:rounded-3xl tablet:bottom-4 desktop:w-[410px] desktop:h-[640px] desktop:right-[150px]`}
		>
			<header className='h-16 w-full flex items-center justify-evenly bg-[#2F3132] px-[16px] gap-x-4 relative tablet:rounded-tl-3xl tablet:rounded-tr-3xl'>
				<img src={LogitechMessage} alt='' className='h-6 w-6 tablet:h-8 tablet:w-8' />
				<span className='flex items-center h-full text-white font-semibold text-sm tracking-[-.12px] w-full'>
					Ayuda de ventas de Logitech G
				</span>
				<div
					className='w-5 h-5 rounded-full hover:bg-[#f4f6f8]/20 cursor-pointer flex justify-center items-center p-1 min-w-[32px] tablet:h-8 tablet:w-8'
					onClick={animationStatus}
				>
					<Close />
				</div>
			</header>

			<main className='w-full max-h-[calc(100%-120px)] h-[calc(100%-120px)] relative overflow-x-hidden overflow-y-auto flex-1'>
				<div className='flex flex-col w-full h-auto min-h-[468.68px] max-h-full tablet:min-h-0 absolute bottom-0'>
					<div className='flex justify-center w-full h-[16.8px] text-xs text-[#b2b2b2] uppercase font-semibold  mt-[25px] mb-[15px]'>
						{dateFormatter()}
					</div>
					<div className='flex items-center w-full'>
						<div className='relative left-0.6/5 p-4  w-[237px] break-words text-sm bg-[#f4f6f8] rounded-t-xl rounded-br-xl tablet:left-12'>
							<span className='text-[#212b36]'>
								{`¡Hola! 👋 Mi nombre es Ollie, su bot de soporte de ventas de Logitech. Estoy aquí para ayudarlo lo mejor que pueda o conectarlo con un agente en vivo. Están disponibles las 24 horas, los 7 días de la semana, para ayudarlo si no puedo responder a sus preguntas. 🙂`}
							</span>
							<br />
							<br />
							<span className=' text-sm text-[#212b36]'>
								{`Al continuar utilizando este chatbot, comprende que esta conversación se graba y puede reproducirse en un punto posterior para fines de garantía de calidad.`}
							</span>
							<br />
							<br />
							<span className='text-sm text-[#212b36]'>
								{`Si está listo para comenzar, diga 'Hola' y podemos comenzar.`}
							</span>
						</div>
					</div>
				</div>
			</main>

			<footer className='flex items-center gap-8 w-full h-auto min-h-[56px] bg-[#FFFFFF] rounded-br-3xl rounded-bl-3xl relative pb-2'>
				<div className='rounded-full hover:bg-[#f4f6f8] h-9 w-9 cursor-pointer flex justify-center items-center'>
					<Plus />
				</div>
				<form
					action='#'
					className=' flex items-center  justify-center  w-[calc(100%-72px)] border-2 border-[rgba(71,69,123,.12)] bg-[#FFFFFF] rounded-3xl'
					ref={form}
				>
					<textarea
						className='w-[94%] overflow-x-hidden  resize-none border-none outline-none p-2  rounded-3xl text-sm scrollbar whitespace-pre-wrap'
						name=''
						rows={1}
						wrap='hard'
						cols={38}
						placeholder='Escriba un mensaje'
						onChange={(e) => visibility(e)}
						onInput={(e) => autoAdjustRows(e, ROWS)}
						onFocus={() => addBorder({ style: FOCUS_TEXTAREA_STYLE })}
						onBlur={() => removeBorder({ style: BLUR_TEXTAREA_STYLE })}
					></textarea>
				</form>

				<div
					className='rounded-full hover:bg-[#f4f6f8] h-9 w-9 cursor-pointer flex justify-center items-center opacity-0'
					ref={tag}
				>
					<Send />
				</div>
			</footer>
		</div>
	)
}
