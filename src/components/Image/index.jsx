import { sizeAndResize } from '@/utils/constants'

const Image = ({ src }) => <img src={src} className={`${sizeAndResize}`} />

export default Image
