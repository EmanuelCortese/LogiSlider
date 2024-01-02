export const autoAdjustRows = (e, { minRows, maxRows }) => {
	const textareaLineHeight = 24
	const prevRows = e.target.rows
	e.target.rows = minRows

	const currRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

	if (currRows === prevRows) {
		e.target.rows = currRows
	}
	if (currRows >= maxRows) {
		e.target.rows = maxRows
		e.target.scrollTop = e.target.scrollHeight
	}

	e.target.rows = currRows < maxRows ? currRows : maxRows
}
