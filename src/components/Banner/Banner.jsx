export const Banner = ({
	props: { logo, title, subTitle, description, button, details, classes },
}) => {
	const { containerClass, titleClass, logoClass, subtitleClass, descriptionClass, buttonClass } =
		classes

	return (
		<div className={`flex items-center justify-center absolute h-full w-full`}>
			<div className={`flex flex-col font-LLBrown  absolute  z-10 w-11/12 ${containerClass}`}>
				{logo && <img src={logo} className={`${logoClass}`} />}

				{title && (
					<h2 className={`uppercase font-bold leading-none whitespace-pre-line ${titleClass}`}>
						{title}
					</h2>
				)}

				{subTitle && (
					<h3 className={`font-bold whitespace-pre-line uppercase ${subtitleClass} `}>
						{subTitle}
					</h3>
				)}

				{description && (
					<p className={`whitespace-pre-line w-4/5 text-slate-50 ${descriptionClass}`}>
						{description}
					</p>
				)}

				{details && (
					<span className={`w-16 h-1.5 mb-3 bg-slate-400 tablet:w-[72px] desktop:w-20`}></span>
				)}

				{button && (
					<button
						className={`rounded font-bold uppercase border-2 text-gray-800 border-logi-blue bg-logi-blue hover:bg-zinc-900/5 hover:text-logi-blue hover:font-bold transition-colors duration-500 ${buttonClass}`}
					>
						{button}
					</button>
				)}
			</div>
		</div>
	)
}
