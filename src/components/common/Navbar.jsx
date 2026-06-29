import { useState, useEffect } from "react";
import { motion } from "motion/react";

const navLinks = ["CONTACT", "SKILLS", "PROJECTS", "ABOUT"];

function scrollToSection(id) {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: "smooth" });
	}
}

export default function Navbar({ className = "" }) {
	const [isHovered, setIsHovered] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
						{navLinks.map((link) => (
							<button
								key={link}
								onClick={() => handleLinkClick(link.toLowerCase())}
								className="bg-[#e1ff51] text-black text-sm font-bold tracking-wider cursor-pointer"
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
				className="flex flex-row-reverse items-center bg-black rounded-lg overflow-hidden cursor-pointer gap-x-2"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				animate={{ maxWidth: isHovered ? 500 : 68 }}
				transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
			>
				<div className="w-17 h-17 flex-shrink-0 flex items-center justify-center bg-[#e1ff51] text-black font-bold text-3xl rounded-lg">
					𠮷
				</div>

				{navLinks.map((link) => (
					<motion.button
						key={link}
						onClick={() => scrollToSection(link.toLowerCase())}
						className="inline-block text-[#e1ff51] text-sm font-bold tracking-wider whitespace-nowrap overflow-hidden px-4 cursor-pointer"
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{
							duration: 0.35,
							delay: isHovered ? 0.1 : 0,
							ease: "easeOut",
						}}
					>
						{link}
					</motion.button>
				))}
			</motion.div>
		</div>
	);
}
