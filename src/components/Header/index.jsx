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
				<button className='flex flex-col justify-center h-[72px] w-[18px] gap-[3px] border-none bg-transparent mobile:gap-[4px] mobile:h-[84px] mobile:w-[21px] tablet:gap-[5px] tablet:h-full tablet:w-[24px]'>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						} h-[2px] w-full rounded-[1px] mobile:h-[3px]`}
					></span>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						}  h-[2px]  w-full rounded-[1px] mobile:h-[3px]`}
					></span>
					<span
						className={`${
							index === 3 ? 'bg-zinc-900/80' : 'bg-zinc-100/80'
						}  h-[2px]  w-full rounded-[1px] mobile:h-[3px]`}
					></span>
				</button>

				<Logo />

				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-[18px] w-[18px] mobile:w-[21.5px] mobile:h-[21.5px] tablet:h-[25px] tablet:w-[25px]'
					viewBox='0 0 512 512'
				>
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
