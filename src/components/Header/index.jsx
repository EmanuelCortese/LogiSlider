import SliderContext from '@/context/SliderContext'
import { Logo } from '@/icons/Logo'
import { useContext } from 'react'

export const Header = () => {
	const {
		state: { index },
	} = useContext(SliderContext)

	return (
		<div className='flex items-center justify-center h-24 w-full absolute top-[24px] z-10'>
			<div className='flex items-center justify-around h-full w-[87%] '>
				<button className='flex flex-col justify-center gap-[5px] h-full w-[24px] border-none bg-transparent'>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						} h-[3px] w-full rounded-[1px]`}
					></span>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						} h-[3px] w-full rounded-[1px]`}
					></span>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						} h-[3px] w-full rounded-[1px]`}
					></span>
				</button>

				<Logo />

				<svg xmlns='http://www.w3.org/2000/svg' height='25' width='25' viewBox='0 0 512 512'>
					<path
						fill={index === 3 ? 'rgb(24, 24, 27, 0.8)' : 'rgb(244, 244, 245, .8)'}
						strokeWidth='30'
						d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
					/>
				</svg>
			</div>
		</div>
	)
}
