import { useState, useEffect } from "react";
import { motion, animate } from "motion/react";

const desktopNavLinks = ["CONTACT", "SKILLS", "PROJECTS", "ABOUT"];
const mobileNavLinks = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];

// function scrollToSection(id) {
// 	const el = document.getElementById(id);
// 	if (el) {
// 		el.scrollIntoView({ behavior: "smooth" });
// 	}
// }

function scrollToSection(id) {
	const el = document.getElementById(id);
	if (!el) return;

	const yOffset = -20; // adjust for navbar spacing
	const targetY = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
	const startY = window.pageYOffset;

	animate(startY, targetY, {
		duration: 2.5,
		ease: [0.16, 1, 0.3, 1], // same custom ease you use elsewhere
		onUpdate: (value) => {
			window.scrollTo(0, value);
		},
	});
}

export default function Navbar({ className = "" }) {
	const [isHovered, setIsHovered] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [hoveredLink, setHoveredLink] = useState(null);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	const handleToggle = () => {
		if (isMobile) {
			setIsMenuOpen((prev) => !prev);
		}
	};

	const handleLinkClick = (id) => {
		scrollToSection(id);
		setIsMenuOpen(false);
	};

	/* Mobile: click to expand to half-screen */
	if (isMobile) {
		return (
			<div className={className}>
				<motion.div
					className="flex flex-col bg-[#e1ff51] rounded-lg overflow-hidden"
					animate={{
						width: isMenuOpen ? "40vw" : 68,
						height: isMenuOpen ? "30vh" : 68,
					}}
					transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
				>
					<div
						className="w-17 h-17 flex-shrink-0 flex items-center justify-center bg-[#e1ff51] text-black font-bold text-3xl rounded-lg cursor-pointer"
						onClick={handleToggle}
					>
						𠮷
					</div>

					<motion.div
						className="flex flex-col items-center px-6 gap-y-5"
						animate={{ opacity: isMenuOpen ? 1 : 0 }}
						transition={{ duration: 0.35, delay: isMenuOpen ? 0.2 : 0 }}
					>
						{mobileNavLinks.map((link) => (
							<button
								key={link}
								onClick={() => handleLinkClick(link.toLowerCase())}
								onMouseEnter={() => setHoveredLink(link)}
								onMouseLeave={() => setHoveredLink(null)}
								className="bg-[#e1ff51] text-black text-sm font-bold tracking-wider cursor-pointer flex items-center gap-2"
							>
								{link}
							</button>
						))}
					</motion.div>
				</motion.div>
			</div>
		);
	}

	/* Desktop: hover-driven horizontal expansion */
	return (
		<div className={className}>
			<motion.div
				className="flex flex-row-reverse items-center bg-[#e1ff51] rounded-lg overflow-hidden cursor-pointer gap-x-2"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				animate={{ maxWidth: isHovered ? 500 : 68 }}
				transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
			>
				<div className="w-17 h-17 flex-shrink-0 flex items-center justify-center bg-[#e1ff51] text-black font-bold text-3xl rounded-lg">
					𠮷
				</div>

				{desktopNavLinks.map((link) => (
					<motion.button
						key={link}
						onClick={() => scrollToSection(link.toLowerCase())}
						onMouseEnter={() => setHoveredLink(link)}
						onMouseLeave={() => setHoveredLink(null)}
						className="inline-block text-black text-sm font-bold tracking-wider whitespace-nowrap overflow-hidden px-6 cursor-pointer flex items-center gap-4"
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{
							duration: 0.35,
							delay: isHovered ? 0.1 : 0,
							ease: "easeOut",
						}}
					>
						<motion.span
							animate={
								hoveredLink === link
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -4 }
							}
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							▸
						</motion.span>
						{link}
					</motion.button>
				))}
			</motion.div>
		</div>
	);
}
