import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedButton from "../common/Button";

const projectData = [
	{
		id: 1,
		logo: "★★",
		role: "SENIOR LEAD",
		company: "WORK & CO",
		date: "2021 - Present",
		image: "https://placehold.co/800x400/00272c/e1ff51?text=WORK+%26+CO",
		title: "Citekit",
		techStack: ["React", "TypeScript", "Figma", "Storybook"],
		summary:
			"Leading product design systems for enterprise-scale applications.",
		description:
			"Spearheaded the design and development of a comprehensive design system adopted across multiple product teams. Architected reusable component libraries, established UX patterns, and mentored junior designers. Collaborated closely with engineering to ensure pixel-perfect implementation.",
		links: {
			demo: "https://example.com/demo",
			source: "https://github.com/example",
			live: "https://example.com",
		},
	},
	{
		id: 2,
		logo: "∏",
		role: "SENIOR DESIGNER",
		company: "TOGETHER AGENCY",
		date: "2019 - 2021",
		image: "https://placehold.co/800x400/00272c/e1ff51?text=TOGETHER+AGENCY",
		title: "Project Baksho",
		techStack: ["Figma", "After Effects", "Webflow", "JavaScript"],
		summary: "Crafted high-impact digital experiences for global brands.",
		description:
			"Delivered end-to-end design solutions for Fortune 500 clients, from conceptual wireframes to polished high-fidelity prototypes. Led user research sessions, design sprints, and cross-functional stakeholder presentations. Awarded 'Best Digital Campaign' for a flagship 2020 project.",
		links: {
			demo: "https://example.com/demo",
			source: "https://github.com/example",
			live: "https://example.com",
		},
	},
	{
		id: 3,
		logo: "frog",
		role: "VISUAL DESIGNER",
		company: "FROG",
		date: "2018 - 2019",
		image: "https://placehold.co/800x400/00272c/e1ff51?text=FROG",
		title: "PicoDB",
		techStack: ["Illustrator", "Photoshop", "Premiere Pro", "Figma"],
		summary: "Designed immersive brand identities and motion systems.",
		description:
			"Developed visual identity systems for tech startups and established enterprises. Created motion design assets, brand guidelines, and promotional materials. Collaborated with strategy and engineering teams to translate complex briefs into compelling visual narratives.",
		links: {
			demo: "https://example.com/demo",
			source: "https://github.com/example",
			live: "https://example.com",
		},
	},
	{
		id: 4,
		logo: "TBD*",
		role: "DESIGN MANAGER",
		company: "CCA TBD* STUDIO",
		date: "2017 - 2018",
		image: "https://placehold.co/800x400/00272c/e1ff51?text=TBD+STUDIO",
		title: "CCA TBD* Studio — Design Manager",
		techStack: ["Figma", "Notion", "Miro", "After Effects"],
		summary: "Managed student-led design studio producing client work.",
		description:
			"Directed a team of 12 student designers in a studio environment, managing project timelines, client communication, and design deliverables. Orchestrated workshops, critiques, and portfolio reviews. Secured 3 major clients for the studio's inaugural year.",
		links: {
			demo: "https://example.com/demo",
			source: "https://github.com/example",
			live: "https://example.com",
		},
	},
	{
		id: 5,
		logo: "SYP",
		role: "DESIGN INTERN",
		company: "SYPARTNERS",
		date: "2017",
		image: "https://placehold.co/800x400/00272c/e1ff51?text=SYPARTNERS",
		title: "SYPartners — Design Intern",
		techStack: ["Figma", "Keynote", "InDesign"],
		summary: "Supported strategy and design teams on transformation projects.",
		description:
			"Assisted senior designers in crafting executive-level presentations and strategic design frameworks. Developed visual assets for client workshops and conducted competitive analysis research. Gained exposure to design thinking methodology applied to organizational transformation.",
		links: {
			demo: null,
			source: null,
			live: null,
		},
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

const overlayVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const modalVariants = {
	hidden: { opacity: 0, scale: 0.92, y: 30 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: "spring", stiffness: 350, damping: 30 },
	},
	exit: { opacity: 0, scale: 0.92, y: 30, transition: { duration: 0.2 } },
};

const ProjectModal = ({ project, onClose }) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	const handleBackdropClick = useCallback(
		(e) => {
			if (e.target === e.currentTarget) onClose();
		},
		[onClose],
	);

	return (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
			variants={overlayVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			onClick={handleBackdropClick}
		>
			<motion.div
				className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#003238] border border-[#e1ff51]/20 rounded-2xl shadow-2xl"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-[#e1ff51] hover:bg-[#e1ff51] hover:text-[#00272c] transition-colors duration-200 cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				{project.image && (
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-48 md:h-56 object-cover rounded-t-2xl"
					/>
				)}

				<div className="p-6 md:p-8 space-y-6">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
						<h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#e1ff51]">
							{project.title || project.company}
						</h3>
						<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#e1ff51]/60 whitespace-nowrap">
							{project.date}
						</span>
					</div>

					{project.techStack && project.techStack.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{project.techStack.map((tech, i) => (
								<span
									key={i}
									className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg border border-[#e1ff51]/30 text-[#e1ff51]/80"
								>
									{tech}
								</span>
							))}
						</div>
					)}

					{project.summary && (
						<p className="text-sm md:text-base font-medium italic text-[#e1ff51]/70 leading-relaxed text-left">
							{project.summary}
						</p>
					)}

					{project.description && (
						<p className="text-sm md:text-base leading-relaxed text-[#e1ff51]/80 text-left">
							{project.description}
						</p>
					)}

					<div className="flex flex-wrap gap-3 pt-2">
						{project.links?.demo && (
							<AnimatedButton
								onClick={() => window.open(project.links.demo, "_blank")}
								className="!bg-[#ce3421] !text-[#00272c] border border-[#ce3421] hover:!text-[#ce3421]"
							>
								Watch Demo
							</AnimatedButton>
						)}
						{project.links?.source && (
							<AnimatedButton
								onClick={() => window.open(project.links.source, "_blank")}
								className="!bg-transparent !text-[#ce3421] border border-[#ce3421] hover:!text-[#00272c]"
							>
								Source Code
							</AnimatedButton>
						)}
						{project.links?.live && (
							<AnimatedButton
								onClick={() => window.open(project.links.live, "_blank")}
								className="!bg-transparent !text-[#e1ff51] border border-[#e1ff51]/50 hover:!text-[#00272c]"
							>
								Live
							</AnimatedButton>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

const ProjectsSection = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	const openModal = (project) => setSelectedProject(project);
	const closeModal = () => setSelectedProject(null);

	return (
		<section className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-center items-center p-6 md:p-12 selection:bg-[#e1ff51] selection:text-[#00272c]">
			<div className="max-w-6xl w-full flex flex-col items-center space-y-16">
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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
					{projectData.map((project) => (
						<motion.div
							key={project.id}
							initial="initial"
							whileHover="hover"
							variants={cardVariants}
							onClick={() => openModal(project)}
							className="relative overflow-hidden grid grid-cols-2 bg-transparent border border-[#e1ff51]/30 rounded-2xl p-8 min-h-[200px] items-between cursor-pointer"
						>
							<motion.div
								variants={bgVariants}
								className="absolute inset-0 bg-[#e1ff51] z-0"
							/>

							<motion.div
								variants={textVariants}
								className="relative z-10 flex items-center justify-start text-3xl md:text-4xl font-black tracking-tight select-none"
							>
								{project.logo}
							</motion.div>

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

			<AnimatePresence>
				{selectedProject && (
					<ProjectModal project={selectedProject} onClose={closeModal} />
				)}
			</AnimatePresence>
		</section>
	);
};

export default ProjectsSection;
