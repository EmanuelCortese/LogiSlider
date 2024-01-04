import SliderContext from '@/context/SliderContext'
import { useContext } from 'react'

export const Logo = () => {
	const {
		state: { index },
	} = useContext(SliderContext)
	return (
		<div className='flex items-center p-2'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1481.715 449.797'
				className='w-28 h-28 mr-2'
			>
				<g fill={index === 3 ? '#09090B' : '#FAFAFA'}>
					<path d='M0 318.163V6.59h54.729v311.572H0v.002zM194.832 92.128c-70.175 0-118.734 53.954-118.734 115.71 0 68.921 52.829 116.404 119.279 116.404 63.065 0 117.792-46.605 117.792-116.553 0-58.817-45.35-115.56-118.337-115.56zm-.646 52.8c36.725 0 63.754 28.584 63.754 63.108 0 36.606-29.803 63.307-62.764 63.307-38.945 0-63.456-30.867-63.456-63.208.001-35.448 27.674-63.208 62.466-63.208zM450.68 92.128c-70.172 0-118.733 53.954-118.733 115.71 0 68.921 52.829 116.404 119.279 116.404 63.065 0 117.791-46.605 117.791-116.553 0-41.189-17.837-59.464-17.837-59.464l15.171-5.203V98.603h-77.734s-16.854-6.475-37.937-6.475zm-.644 52.8c36.723 0 63.754 28.584 63.754 63.108 0 36.606-29.803 63.307-62.763 63.307-38.946 0-63.456-30.867-63.456-63.208.001-35.448 27.674-63.208 62.465-63.208zM513.403 333.394c0 36.604-29.801 63.506-62.762 63.506-38.947 0-63.556-31.168-63.556-63.506h-55.524c0 68.922 52.827 116.402 119.279 116.402 63.064 0 117.791-46.459 117.791-116.402h-55.228zM590.939 318.163V98.603h54.732v219.56h-54.732zM698.816 318.163v-170.38h-29.349v-49.18h29.349V31.18h54.731v67.423h30.142v49.18h-30.142v170.38h-54.731zM654.434 36.244c0 20.016-16.227 36.243-36.242 36.243-20.019 0-36.244-16.228-36.244-36.243C581.948 16.227 598.175 0 618.192 0c20.016 0 36.242 16.227 36.242 36.244zM906.736 91.98c-70.506 0-115.957 53.98-115.957 117.841 0 65.993 45.604 114.57 117.098 114.57 66.691 0 99.498-41.646 99.498-41.646l-36.587-36.637s-27.625 29.797-62.218 29.797c-28.837 0-51.893-16.096-59.938-45.61h170.541v-15.07c.002-60.136-34.805-123.245-112.437-123.245zm-1.734 48.188c25.212 0 50.997 13.488 56.764 45.708h-114.62c4.538-22.649 24.354-45.708 57.856-45.708zM1156.072 324.42c-70.703 0-118.881-53.853-118.881-117.346 0-65.526 54.448-115.135 118.654-115.135 62.068 0 93.842 43.816 93.842 43.816l-38.183 38.008s-22.116-28.576-55.92-28.576c-37.463 0-63.08 28.66-63.08 62.727 0 35.97 27.249 63.57 62.659 63.57 34.348 0 56.288-28.529 56.288-28.529l38.563 37.986s-31.463 43.48-93.94 43.48h-.002v-.002zM1269.927 318.322V5.798h54.73v114.823s20.957-28.682 66.544-28.682c57.311 0 90.513 42.602 90.513 97.09v129.292h-54.732v-121.02c0-36.606-22.789-51.794-48.037-51.794-28.766 0-54.286 16.371-54.286 54.625v118.19h-54.732z' />
				</g>
			</svg>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 118 118' className='w-10 h-10'>
				<g fill={index === 3 ? '#09090B' : '#FAFAFA'}>
					<path d='M19.08 18.97C29.93 7.54 45.55.9 61.31.95c0 8.03.01 16.07 0 24.1-10.65.1-21.21 5.22-27.43 13.94-7.85 10.55-8.65 25.73-1.93 37.04 5.83 10.4 17.51 16.86 29.36 16.92.01 8.03.01 16.07 0 24.1-13.89.01-27.7-5.07-38.18-14.19C10.75 92.29 3.14 76.31 2.99 60 2.63 44.9 8.6 29.83 19.08 18.97zM62.06 48.56H114c0 17.36.01 34.72-.01 52.07-7.97-.01-15.95-.01-23.92 0-.02-9.35 0-18.71-.01-28.06-9.33-.01-18.66-.01-27.99 0-.02-8-.01-16.01-.01-24.01z' />
				</g>
			</svg>
		</div>
	)
}
