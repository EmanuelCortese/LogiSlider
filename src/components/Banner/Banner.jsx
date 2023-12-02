export const Banner = ({ props }) => {
	const { logo, title, subTitle, description, button, buttonDescription, details, styles } = props

	const {
		position: { bottom, top, left },
		textAling,
		flexItems,
		gapY,
	} = styles.bannerStyle

	const { logoWidth } = styles.logoStyle

	const {
		textSize,
		textColor,
		subTitleStyle: { subTitleSize, subTitleColor },
	} = styles.titleStyle

	const {
		buttonColor,
		buttonTextSize,
		buttonPadding: { buttonPaddingX, buttonPaddingY },
		buttonWidth,
	} = styles.buttonStyle

	const { descColor, descTransform, descFontWeight, descFontSize } = styles.descriptionStyle

	return (
		<div className={`flex items-center justify-center absolute h-full w-full`}>
			<div
				className={` flex flex-col font-banner  absolute  z-10 ${gapY} ${flexItems} ${textAling} ${top} ${bottom} ${left}`}
			>
				{logo && <img src={logo} className={`${logoWidth}`} />}

				<h2
					className={`uppercase ${textColor} ${textSize} font-semibold leading-none  whitespace-pre-line`}
				>
					{title && title}
				</h2>

				{subTitle && (
					<h3
						className={`${subTitleSize} ${subTitleColor} font-bold whitespace-pre-line uppercase`}
					>
						{subTitle}
					</h3>
				)}

				<p
					className={`${descColor} ${descTransform} ${descFontWeight} ${descFontSize} whitespace-pre-line`}
				>
					{description && description}
				</p>

				{details && <span className={`w-20 h-1.5 mb-3 bg-slate-400`}></span>}

				{button && (
					<button
						className={`rounded font-semibold uppercase border-2 border-logi-blue bg-logi-blue hover:bg-black hover:text-logi-blue transition-all duration-500 ${buttonWidth} ${buttonPaddingX} ${buttonPaddingY} ${buttonTextSize} ${buttonColor} `}
					>
						{buttonDescription && buttonDescription}
					</button>
				)}
			</div>
		</div>
	)
}
