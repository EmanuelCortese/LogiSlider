import { fullSize } from '../../utils/constants'
import { isVideo } from '../../utils/isVideo'
import Image from '../Image'
import { mediaList } from '../mediaList'
import Video from '../Video'

const ContentSlide = ({ refSlide }) => (
	<div ref={refSlide} className={`flex ${fullSize}`}>
		{mediaList.map((src) =>
			isVideo(src) ? <Video key={src} src={src} /> : <Image key={src} src={src} />
		)}
	</div>
)

export default ContentSlide
