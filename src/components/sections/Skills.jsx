import React from "react";
import { motion } from "motion/react";

const SkillsSection = () => {
	// Categorized tech stack mapping
	const skillCategories = [
		{
			id: 1,
			title: "Frontend",
			skills: ["React", "Vite", "Tailwind CSS", "JavaScript", "TypeScript"],
		},
		{
			id: 2,
			title: "Backend",
			skills: ["FastAPI", "Python", "PostgreSQL", "SQLite", "REST APIs"],
		},
		{
			id: 3,
			title: "AI / ML",
			skills: [
				"RAG Systems",
				"Multi-Agent AI",
				"FAISS",
				"Vector Embeddings",
				"Neo4j",
			],
		},
		{
			id: 4,
			title: "DevOps & Systems",
			skills: [
				"Docker",
				"Docker Compose",
				"Git / GitHub",
				"C / C++",
				"Systems Programming",
			],
		},
	];

	// Animation variants matching the premium, jank-free project card configuration
	const cardVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.025,
			transition: { type: "spring", stiffness: 400, damping: 28 },
		},
	};

	const bgVariants = {
		initial: { opacity: 0 },
		hover: {
			opacity: 1,
			transition: { duration: 0.25, ease: "easeInOut" },
		},
	};

	const textVariants = {
		initial: { color: "#e1ff51" },
		hover: {
			color: "#00272c",
			transition: { duration: 0.2 },
		},
	};

	const tagBorders = {
		initial: { borderColor: "rgba(225, 255, 81, 0.3)" },
		hover: {
			borderColor: "rgba(0, 39, 44, 0.4)",
			transition: { duration: 0.2 },
		},
	};

	return (
		<section id="skills" className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-center items-center p-6 md:p-12 selection:bg-[#e1ff51] selection:text-[#00272c]">
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
						{"TECH STACK".split("").map((letter, index) => (
							<span
								key={`skills-title-${index}`}
								className={`overflow-hidden inline-block ${letter === " " ? "w-[2vw]" : ""}`}
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
				{/* SKILLS CATEGORIES GRID                                    */}
				{/* ========================================================= */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-center">
					{skillCategories.map((category) => (
						<motion.div
							key={category.id}
							initial="initial"
							whileHover="hover"
							variants={cardVariants}
							className="relative overflow-hidden bg-transparent border border-[#e1ff51]/30 rounded-2xl p-8 min-h-[220px] flex flex-col justify-between cursor-pointer"
						>
							{/* Hardware-accelerated background fill layer */}
							<motion.div
								variants={bgVariants}
								className="absolute inset-0 bg-[#e1ff51] z-0"
							/>

							{/* Card Title Header */}
							<div className="relative z-10 mb-6">
								<motion.h3
									variants={textVariants}
									className="text-lg md:text-xl font-black uppercase tracking-wider"
								>
									{category.title}
								</motion.h3>
							</div>

							{/* Skills Tag Flexbox Wrap Container */}
							<div className="relative z-10 flex flex-wrap gap-2.5">
								{category.skills.map((skill, idx) => (
									<motion.span
										key={idx}
										variants={textVariants}
										className="text-xs md:text-sm font-bold tracking-wide border rounded-lg px-3 py-1.5 uppercase transition-colors duration-200 select-none"
										style={{ borderColor: "rgba(225, 255, 81, 0.3)" }}
										// Explicitly tracking the inner borders state
										custom={tagBorders}
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
