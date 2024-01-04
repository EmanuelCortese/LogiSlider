import { DATE_OPTIONS } from '@/utils/constants'

export const dateFormatter = () => {
	const date = new Date()
	const formatter = new Intl.DateTimeFormat('es-AR', DATE_OPTIONS)
	const parts = formatter.formatToParts(date).map((x) => [x.value].join(' '))
	const formatDate = `${parts[2]} ${parts[0]} ${parts[4]}, ${parts[6]}:${parts[8]} ${parts[10]} `
	return formatDate
}
