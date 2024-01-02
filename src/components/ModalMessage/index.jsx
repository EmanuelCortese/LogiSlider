import { useContext, useRef } from 'react'
import LogitechMessage from '../../assets/Logitech_logo_message.png'
import Context from '../../context/IndexContext'
import { useAnimationStatus } from '../../hooks/useAnimationStatus'
import { useChangeBorder } from '../../hooks/useChangeBorder'
import { useVisibility } from '../../hooks/useVisibility'
import { Close } from '../../icons/Close'
import { Plus } from '../../icons/Plus'
import { Send } from '../../icons/Send'
import '../../index.css'
import { autoAdjustRows } from '../../utils/autoAdjustRows'
import { BLUR_TEXTAREA_STYLE, FOCUS_TEXTAREA_STYLE, ROWS } from '../../utils/constants'
import { dateFormatter } from '../../utils/dateFormatter'

export const ModalMessage = () => {
	const form = useRef()

	const { modal } = useContext(Context)

	const { addBorder, removeBorder } = useChangeBorder({ ref: form })
	const { visibility, tag } = useVisibility()
	const { animationStatus } = useAnimationStatus()

	const ANIMATE_CONDITION = modal ? 'animate-showModal' : modal !== null && 'animate-hideModal'

	return (
		<div
			className={`flex flex-col gap-y-4 w-[434px] h-[640px] fixed bottom-4 right-[150px] z-30 bg-[#FFFFFF] rounded-3xl shadow-[0_0_12px_rgba(0,0,0,.15)] font-sans ${ANIMATE_CONDITION} origin-bottom-right delay-1000 opacity-0 scale-0`}
		>
			<header className='h-16 w-full flex items-center justify-evenly bg-[#2F3132]  rounded-tl-3xl rounded-tr-3xl px-[16px] gap-x-4'>
				<img src={LogitechMessage} alt='' className='h-8 w-8' />
				<span className='flex items-center h-full text-white font-semibold text-sm tracking-[-.12px] w-full'>
					Ayuda de ventas de Logitech G
				</span>
				<div
					className='rounded-full hover:bg-[#f4f6f8]/20 h-8 w-8 cursor-pointer flex justify-center items-center p-1 min-w-[32px]'
					onClick={animationStatus}
				>
					<Close />
				</div>
			</header>

			<main className='flex flex-col w-full h-[520px] overflow-y-auto overflow-x-hidden'>
				<div className='flex justify-center w-full h-[16.8px] text-xs text-[#b2b2b2] uppercase font-semibold  mt-[25px] mb-[15px]'>
					{dateFormatter()}
				</div>
				<div className='flex items-center w-full'>
					<div className='p-4  w-[237px] break-words text-sm  relative left-12  bg-[#f4f6f8] rounded-t-xl rounded-br-xl'>
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
			</main>

			<footer className=' flex items-center justify-evenly  w-full h-auto min-h-[56px] bg-[#FFFFFF] rounded-br-3xl rounded-bl-3xl pb-3'>
				<div className='rounded-full hover:bg-[#f4f6f8] h-9 w-9 cursor-pointer flex justify-center items-center'>
					<Plus />
				</div>
				<form
					action='#'
					className=' flex items-center  justify-center w-[370px] border-2 border-[rgba(71,69,123,.12)] bg-[#FFFFFF] rounded-3xl'
					ref={form}
				>
					<textarea
						className='w-[94%] overflow-x-hidden   resize-none border-none outline-none p-2  rounded-3xl text-sm scrollbar whitespace-pre-wrap'
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
