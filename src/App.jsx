import './App.css'
import img3 from './assets/Logitech_Aurora_Collection.jpg'
import video2 from './assets/Logitech_G_923.mp4'
import video1 from './assets/Logitech_G_Fits.mp4'
import img2 from './assets/Logitech_G_G502.png'
import video3 from './assets/Logitech_G_LoL_KDA.mp4'
import img5 from './assets/Logitech_G_Pro_X_wireless.png'
import img1 from './assets/Logitech_G_Vantum.jpeg'
import img4 from './assets/Logitech_LoL.png'
import { Button } from './components/Button'

const fullSize = 'min-h-full min-w-full'

function App() {
	return (
		<div className='h-screen w-screen flex items-center relative overflow-hidden'>
			<Button
				animatedDottedCircle={'group-hover:animate-leftDottedCircleRotate'}
				animateFirstArrow={'group-hover:animate-translateFirstArrowLeft'}
				animateSecondArrow={'group-hover:animate-translateSecondArrowLeft'}
				barX={'106'}
				barY={'113'}
				location1={'translate(0,0)'}
				location2={'translate(-22,0)'}
				origin={'0 133'}
				position={'left-5'}
			/>
			<div className={`flex ${fullSize}`}>
				<img
					src={img1}
					className={`${fullSize}
					object-fill`}
				/>
				<video
					src={video1}
					type='video/mp4'
					autoPlay
					loop
					muted
					className={`${fullSize} object-fill `}
				/>
				<img
					src={img2}
					className={`${fullSize}
					object-fill`}
				/>
				<img
					src={img3}
					className={`${fullSize}
						object-fill`}
				/>
				<img
					src={img4}
					className={`${fullSize}
					object-fill`}
				/>
				<img
					src={img5}
					className={`${fullSize}
					object-fill`}
				/>
				<video
					src={video2}
					type='video/mp4'
					autoPlay
					loop
					muted
					className={`${fullSize} object-fill `}
				/>
				<video
					src={video3}
					type='video/mp4'
					autoPlay
					loop
					muted
					className={`${fullSize} object-fill `}
				/>
			</div>
			<Button
				animatedDottedCircle={'group-hover:animate-rightDottedCircleRotate'}
				animateFirstArrow={'group-hover:animate-translateFirstArrowRight'}
				animateSecondArrow={'group-hover:animate-translateSecondArrowRight'}
				barX={'155'}
				barY={'113'}
				location1={'translate(288,0), rotate(180)'}
				location2={'translate(266,0), rotate(180)'}
				origin={'0 133'}
				position={'right-5'}
			/>
		</div>
	)
}

export default App
