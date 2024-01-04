import g923Logo from '@/assets/G923_trueforce_logo.webp'
import LoLKda from '@/assets/LoL_G_Kda_lockup.webp'
import img3 from '@/assets/Logitech_Aurora_Collection.jpg'
import img2 from '@/assets/Logitech_G_G502.png'
import img5 from '@/assets/Logitech_G_Pro_X_wireless.png'
import img1 from '@/assets/Logitech_G_Vantum.jpeg'
import img4 from '@/assets/Logitech_LoL.png'
import video2 from '@/assets/videos/Logitech_G_923.mp4'
import video1 from '@/assets/videos/Logitech_G_Fits.mp4'
import video3 from '@/assets/videos/Logitech_G_LoL_KDA.mp4'
import { bannerStyles } from '@/styles/bannerStyles'
import { buttonStyles } from '@/styles/buttonStyles'
import { descriptionStyles } from '@/styles/descriptionStyles'
import { logoStyles } from '@/styles/logoStyles'
import { titleStyles } from '@/styles/titleStyles'

export const mediaList = [
	{
		id: 1,
		media: img1,
		logo: null,
		title: 'Divulgue o seu jogo',
		subTitle: '',
		description: '',
		button: true,
		buttonDescription: 'conheça o vantum',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_1,
			titleStyle: titleStyles.title_1,
			buttonStyle: buttonStyles.button_1,
			descriptionStyle: {},
			logoStyle: {},
		},
	},
	{
		id: 2,
		media: video1,
		logo: null,
		title: `Ajuste perfecto para la\ndiversión`,
		subTitle: '',
		description: 'Audífonos inalámbricos para juegos que se amoldan para ajustarse a tus oídos',
		button: true,
		buttonDescription: 'Presentamos Fits',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_2,
			titleStyle: titleStyles.title_2,
			buttonStyle: buttonStyles.button_2,
			descriptionStyle: descriptionStyles.desc_2,
			logoStyle: {},
		},
	},
	{
		id: 3,
		media: img2,
		logo: null,
		title: 'Un icono. renovado.',
		subTitle: '',
		description: `La gama G502 X.\nEl diseño del legendario G502 renovado\ncon tecnología para juegos pionera.`,
		button: true,
		buttonDescription: 'Presentamos la gama G502 X',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_3,
			titleStyle: titleStyles.title_3,
			buttonStyle: buttonStyles.button_3,
			descriptionStyle: descriptionStyles.desc_3,
			logoStyle: {},
		},
	},
	{
		id: 4,
		media: img3,
		logo: null,
		title: 'Juega a tu manera',
		subTitle: 'Presentamos The Aurora Collection',
		button: true,
		buttonDescription: 'Descúbrela y personaliza a tu gusto',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_4,
			titleStyle: titleStyles.title_4,
			buttonStyle: buttonStyles.button_4,
			descriptionStyle: descriptionStyles.desc_4,
			logoStyle: {},
		},
	},
	{
		id: 5,
		media: img4,
		logo: null,
		title: 'Juega con legends',
		subTitle: '',
		description:
			'Creada por arte de magia. Perfeccionada por la ciencia. Utilizada por\ncampeones. Presentamos la Colección League of Legends.',
		button: true,
		buttonDescription: 'Explorar colecciones League of Legends',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_5,
			titleStyle: titleStyles.title_5,
			buttonStyle: buttonStyles.button_5,
			descriptionStyle: descriptionStyles.desc_5,
			logoStyle: {},
		},
	},
	{
		id: 6,
		media: img5,
		logo: null,
		title: 'Pro con Lightspeed',
		subTitle: 'Pro X\ninalámbricos',
		description: '',
		button: true,
		buttonDescription: 'Más sobre inalámbricos Pro',
		details: true,
		styles: {
			bannerStyle: bannerStyles.banner_6,
			titleStyle: titleStyles.title_6,
			buttonStyle: buttonStyles.button_6,
			descriptionStyle: {},
			logoStyle: {},
		},
	},
	{
		id: 7,
		media: video2,
		logo: g923Logo,
		title: 'Force feedback de próxima generación',
		subTitle: '',
		description: '',
		button: true,
		buttonDescription: 'Presentamos G923',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_7,
			titleStyle: titleStyles.title_7,
			buttonStyle: buttonStyles.button_7,
			descriptionStyle: {},
			logoStyle: logoStyles.logo_7,
		},
	},
	{
		id: 8,
		media: video3,
		logo: LoLKda,
		title: 'Juega al tope',
		subTitle: '',
		description: '',
		button: true,
		buttonDescription: 'Explora dispositivos y accesorios K/DA ahora',
		details: false,
		styles: {
			bannerStyle: bannerStyles.banner_8,
			titleStyle: titleStyles.title_8,
			buttonStyle: buttonStyles.button_8,
			descriptionStyle: {},
			logoStyle: logoStyles.logo_8,
		},
	},
]
