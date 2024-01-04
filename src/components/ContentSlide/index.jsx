import { Banner } from '@/components/Banner/Banner'
import Image from '@/components/Image'
import Video from '@/components/Video'
import { mediaList } from '@/components/mediaList'
import { fullSize } from '@/utils/constants'
import { isVideo } from '@/utils/isVideo'

const ContentSlide = ({ refSlide }) => (
	<div ref={refSlide} className={`flex ${fullSize}`}>
		{mediaList.map((props) => {
			return (
				<div key={props.id} className={`flex ${fullSize} relative`}>
					<Banner props={props} />

					{isVideo(props.media) ? (
						<>
							<Video key={props.media} src={props.media} />
						</>
					) : (
						<>
							<Image key={props.media} src={props.media} />
						</>
					)}
				</div>
			)
		})}
	</div>
)

export default ContentSlide
