import { sizeAndFill } from '../../utils/constants'

const Video = ({ src }) => (
	<video src={src} type='video/mp4' autoPlay loop muted className={`${sizeAndFill}`} />
)

export default Video
