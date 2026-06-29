import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const educationData = [
	{
		id: 1,
		institution: "Islamic University of Technology",
		degree: "Bachelor of Science in Software Engineering",
		gpa: "CGPA: 3.66 (Till 5th Semester)",
		date: "Aug. 2023 – Present",
		location: "Dhaka`, Bangladesh",
	},
	{
		id: 2,
		institution: "BCIC College",
		degree: "Higher Secondary Certificate, Science",
		gpa: "GPA: 5.00",
		date: "2020 – 2022",
		location: "Dhaka, Bangladesh",
	},
];

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

const mutedTextVariants = {
	initial: { color: "rgba(225, 255, 81, 0.7)" },
	hover: {
		color: "rgba(0, 39, 44, 0.8)",
		transition: { duration: 0.2 },
	},
};

const TimelineCard = ({ edu, index }) => {
	const isLeft = index % 2 === 0;

	return (
		<div
			className={`flex w-full items-center ${
				isLeft ? "md:flex-row" : "md:flex-row-reverse"
			} flex-row`}
		>
			<motion.div
				initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				className="w-[calc(50%-28px)] hidden md:block"
			/>

			<div className="w-14 flex justify-center shrink-0 relative z-10">
				<motion.div
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						delay: 0.15,
					}}
					className="w-4 h-4 rounded-full bg-[#e1ff51] border-2 border-[#00272c] shadow-[0_0_12px_rgba(225,255,81,0.5)]"
				/>
			</div>

			<motion.div
				initial="initial"
				whileHover="hover"
				variants={cardVariants}
				viewport={{ once: true, margin: "-80px" }}
				className="relative overflow-hidden bg-transparent border border-[#e1ff51]/30 rounded-2xl p-6 md:p-8 flex-1 min-h-[180px] flex flex-col justify-between cursor-pointer"
			>
				<motion.div
					variants={bgVariants}
					className="absolute inset-0 bg-[#e1ff51] z-0"
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
					className="relative z-10 space-y-4"
				>
					<div className="space-y-1">
						<motion.h3
							variants={textVariants}
							className="text-lg md:text-xl font-black uppercase tracking-wider"
						>
							{edu.institution}
						</motion.h3>
						<motion.p
							variants={mutedTextVariants}
							className="text-xs md:text-sm font-bold tracking-wide"
						>
							{edu.date}
						</motion.p>
					</div>

					<div className="space-y-1">
						<motion.p
							variants={textVariants}
							className="text-sm md:text-base font-bold leading-snug"
						>
							{edu.degree}
						</motion.p>
						<motion.p
							variants={mutedTextVariants}
							className="text-xs font-bold tracking-wider"
						>
							{edu.gpa}
						</motion.p>
					</div>
				</motion.div>

				<motion.div
					variants={mutedTextVariants}
					className="relative z-10 text-[10px] md:text-xs font-bold tracking-widest uppercase mt-4"
				>
					{edu.location}
				</motion.div>
			</motion.div>
		</div>
	);
};

const EducationSection = () => {
	const sectionRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});
	const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

	return (
		<section
			ref={sectionRef}
			className="w-full bg-[#00272c] text-[#e1ff51] flex flex-col items-center py-24 md:py-32 px-6 md:px-12 selection:bg-[#ce3421] selection:text-[#00272c]"
		>
			<div className="max-w-6xl w-full flex flex-col items-center mb-20">
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
						{"EDUCATION".split("").map((letter, index) => (
							<span
								key={`edu-title-${index}`}
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
			</div>

			<div className="max-w-6xl w-full relative">
				{/* Vertical line (trunk) */}
				<motion.div
					style={{ scaleY: lineScale, originY: 0 }}
					className="absolute left-7 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-[#e1ff51]/80 to-[#e1ff51]/20 h-full"
				/>

				<div className="relative flex flex-col gap-16 md:gap-24">
					{educationData.map((edu, index) => (
						<TimelineCard key={edu.id} edu={edu} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default EducationSection;
