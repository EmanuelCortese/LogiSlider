export const useChangeBorder = ({ ref }) => {
	const addBorder = ({ style }) => {
		ref.current.style.border = style
	}
	const removeBorder = ({ style }) => {
		ref.current.style.border = style
	}

	return { addBorder, removeBorder }
}
