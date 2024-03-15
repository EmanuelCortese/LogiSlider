import { sizeAndResize } from '@/utils/constants'

const Video = ({ src }) => (
	<video src={src} type='video/mp4' autoPlay loop muted className={`${sizeAndResize}`} />
)

export default Video
