import './App.css'
import img3 from './assets/Logitech_Aurora_Collection.jpg'
import video2 from './assets/Logitech_G_923.mp4'
import video1 from './assets/Logitech_G_Fits.mp4'
import img2 from './assets/Logitech_G_G502.png'
import video3 from './assets/Logitech_G_LoL_KDA.mp4'
import img5 from './assets/Logitech_G_Pro_X_wireless.png'
import img1 from './assets/Logitech_G_Vantum.jpeg'
import img4 from './assets/Logitech_LoL.png'

const fullSize = 'min-h-full min-w-full'

function App() {
	return (
		<div className='h-screen w-screen relative overflow-hidden'>
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
		</div>
	)
}

export default App
