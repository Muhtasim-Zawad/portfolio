import React from "react";
import { motion } from "motion/react";

const ProjectsSection = () => {
	const projectData = [
		{
			id: 1,
			logo: "★★",
			role: "SENIOR LEAD",
			company: "WORK & CO",
			date: "2021 - Present",
		},
		{
			id: 2,
			logo: "∏",
			role: "SENIOR DESIGNER",
			company: "TOGETHER AGENCY",
			date: "2019 - 2021",
		},
		{
			id: 3,
			logo: "frog",
			role: "VISUAL DESIGNER",
			company: "FROG",
			date: "2018 - 2019",
		},
		{
			id: 4,
			logo: "TBD*",
			role: "DESIGN MANAGER",
			company: "CCA TBD* STUDIO",
			date: "2017 - 2018",
		},
		{
			id: 5,
			logo: "SYP",
			role: "DESIGN INTERN",
			company: "SYPARTNERS",
			date: "2017",
		},
	];

	// Variants for parent card wrapper (handles subtle spring scale-up)
	const cardVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.025,
			transition: { type: "spring", stiffness: 400, damping: 28 },
		},
	};

	// Variants for the solid bright background fade-in
	const bgVariants = {
		initial: { opacity: 0 },
		hover: {
			opacity: 1,
			transition: { duration: 0.25, ease: "easeInOut" },
		},
	};

	// Variants for color-swapping all text nodes inside the active card
	const textVariants = {
		initial: { color: "#e1ff51" }, // Neon Lime
		hover: {
			color: "#00272c", // Deep Teal
			transition: { duration: 0.2 },
		},
	};

	// Variants for subtle text opacity states to maintain readable hierarchy
	const mutedTextVariants = {
		initial: { color: "rgba(225, 255, 81, 0.7)" },
		hover: {
			color: "rgba(0, 39, 44, 0.8)",
			transition: { duration: 0.2 },
		},
	};

	return (
		<section className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-center items-center p-6 md:p-12 selection:bg-[#e1ff51] selection:text-[#00272c]">
			<div className="max-w-6xl w-full flex flex-col items-center space-y-16">
				{/* ========================================================= */}
				{/* STAGGERED TEXT SWIPE UP TITLE                             */}
				{/* ========================================================= */}
				<h2 className="text-[8vw] md:text-[5vw] font-black uppercase leading-none font-sans flex items-center justify-center">
					<motion.div
						className="flex overflow-hidden"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.04 } },
						}}
					>
						{"PROJECTS".split("").map((letter, index) => (
							<span
								key={`proj-title-${index}`}
								className="overflow-hidden inline-block"
							>
								<motion.span
									className="block"
									variants={{
										hidden: { y: "100%" },
										visible: {
											y: 0,
											transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
										},
									}}
								>
									{letter}
								</motion.span>
							</span>
						))}
					</motion.div>
				</h2>

				{/* ========================================================= */}
				{/* PROJECTS / EXPERIENCE GRID                                */}
				{/* ========================================================= */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
					{projectData.map((project) => (
						<motion.div
							key={project.id}
							initial="initial"
							whileHover="hover"
							variants={cardVariants}
							className="relative overflow-hidden grid grid-cols-2 bg-transparent border border-[#e1ff51]/30 rounded-2xl p-8 min-h-[200px] items-between cursor-pointer"
						>
							{/* 1. SOLID BRIGHT BACKGROUND OVERLAY */}
							{/* Using hardware-accelerated opacity to prevent layout rendering stutter */}
							<motion.div
								variants={bgVariants}
								className="absolute inset-0 bg-[#e1ff51] z-0"
							/>

							{/* 2. LEFT DIVIDE: LOGO */}
							<motion.div
								variants={textVariants}
								className="relative z-10 flex items-center justify-start text-3xl md:text-4xl font-black tracking-tight select-none"
							>
								{project.logo}
							</motion.div>

							{/* 3. RIGHT DIVIDE: METADATA DETAILS */}
							<div className="relative z-10 flex flex-col justify-between items-end text-right h-full uppercase">
								<div className="space-y-1">
									<motion.h3
										variants={textVariants}
										className="text-xs md:text-sm font-black tracking-wider leading-snug"
									>
										{project.role}
									</motion.h3>
									<motion.p
										variants={mutedTextVariants}
										className="text-[10px] md:text-xs font-bold"
									>
										@ {project.company}
									</motion.p>
								</div>

								<motion.div
									variants={mutedTextVariants}
									className="text-[10px] md:text-xs font-bold tracking-widest pt-4"
								>
									{project.date}
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
