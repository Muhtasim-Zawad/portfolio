import { useState } from "react";
import { motion } from "motion/react";

const navLinks = ["CONTACT", "SKILLS", "PROJECTS", "ABOUT"];

export default function Navbar({ className = "" }) {
	const [isHovered, setIsHovered] = useState(false);

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
					<motion.span
						key={link}
						className="inline-block text-[#e1ff51] text-sm font-bold tracking-wider whitespace-nowrap overflow-hidden px-4"
						animate={{ opacity: isHovered ? 1 : 0 }}
						transition={{
							duration: 0.35,
							delay: isHovered ? 0.1 : 0,
							ease: "easeOut",
						}}
					>
						{link}
					</motion.span>
				))}
			</motion.div>
		</div>
	);
}
