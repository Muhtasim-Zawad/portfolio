import { motion, useScroll, useTransform } from "motion/react";

const HeroSection = () => {
	const { scrollY } = useScroll();
	const imageY = useTransform(scrollY, [0, 800], [0, -400]);

	// Animation configuration for the text slide-up effect
	const titleLineVariants = {
		hidden: { y: "100%", opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
			},
		},
	};

	// Stagger wrapper so the lines animate one after another
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	return (
		<section className="relative w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#00272c]">
			{/* ========================================================= */}
			{/* PLACEHOLDER: GLOBAL NAVIGATION BAR                        */}
			{/* Absolute positioning keeps it resting over both columns  */}
			{/* ========================================================= */}
			{/* <Navbar className="absolute top-0 left-0 w-full z-50 p-6 md:p-12" /> */}

			{/* LEFT COLUMN: BRANDING & TYPOGRAPHY */}
			<div className="flex flex-col justify-between p-6 md:p-12 h-full text-[#e1ff51] min-h-[50vh] md:min-h-screen">
				{/* Top Header Placeholder / Logo Icon */}
				<div className="pt-4">
					<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-[#e1ff51] font-bold text-2xl">
						{/* Replace with your exact SVG/Logo Component */}
						𠮷
					</div>
				</div>

				{/* Big Heading Titles with Slide-up Animation */}
				<motion.div className="my-auto py-8" initial="hidden" animate="visible">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
						{/* The Huge Text Container (Left-aligned text layout) */}
						<h1
							className="text-[min(45vh,20vw)] md:text-[min(45vh,8vw)] font-black uppercase leading-[0.8] lg:col-span-12 flex flex-col items-start justify-start text-left w-full"
							style={{ fontFamily: "Manuka, sans-serif" }}
						>
							{/* Line 1: MH */}
							<motion.div
								className="flex overflow-hidden"
								variants={{
									hidden: {},
									visible: { transition: { staggerChildren: 0.05 } },
								}}
							>
								{"MHT ".split("").map((letter, index) => (
									<span
										key={`mh-${index}`}
										className="overflow-hidden inline-block px-0.5"
									>
										<motion.span
											className="block"
											variants={{
												hidden: { y: "100%" },
												visible: {
													y: 0,
													transition: {
														duration: 0.6,
														ease: [0.16, 1, 0.3, 1],
													},
												},
											}}
										>
											{letter}
										</motion.span>
									</span>
								))}
							</motion.div>

							{/* Line 2: ZAWAD */}
							<motion.div
								className="flex overflow-hidden"
								variants={{
									hidden: {},
									visible: {
										transition: { staggerChildren: 0.05, delayChildren: 0.15 },
									},
								}}
							>
								{"ZAWAD".split("").map((letter, index) => (
									<span
										key={`zawad-${index}`}
										className="overflow-hidden inline-block"
									>
										<motion.span
											className="block"
											variants={{
												hidden: { y: "100%" },
												visible: {
													y: 0,
													transition: {
														duration: 0.6,
														ease: [0.16, 1, 0.3, 1],
													},
												},
											}}
										>
											{letter}
										</motion.span>
									</span>
								))}
							</motion.div>
						</h1>

						{/* Sub-description next to title */}
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="text-xs md:text-sm font-medium leading-relaxed max-w-xs lg:col-span-4 lg:pt-4 text-left"
						>
							Designing graphic and digital experiences that ease, beautify, and
							delight moments in life.
						</motion.p>
					</div>
				</motion.div>

				{/* Footer Meta Details Data Row */}
				<div className="flex justify-between items-center text-[10px] md:text-xs font-bold tracking-wider border-t border-black/10 pt-4 uppercase">
					<div>Brooklyn, NY</div>
					<div>Jun 20, 2026</div>
					<div>6:45 AM</div>
				</div>
			</div>

			{/* RIGHT COLUMN: HERO GRAPHIC / IMAGE PORTRAIT */}
			<div className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-[#00272c]">
				<motion.img
					src="src/assets/images/zawad-portfolio-image.jpg"
					alt="Muhtasim Zawad Portrait Picture"
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 3.0,
						ease: [0.25, 1, 0.5, 1],
					}}
					style={{ y: imageY }}
					className="w-full h-full object-cover object-center"
				/>

				{/* Floating Interactive Action / Contact Button (Bottom Right) */}
				<div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center text-[#e1ff51] shadow-xl cursor-pointer"
					>
						{/* Mail Icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6 md:w-8 md:h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
							/>
						</svg>
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
