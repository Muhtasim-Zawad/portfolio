import React, { useState } from "react";
import { motion } from "motion/react";
import AnimatedButton from "../common/Button"; // Adjust the import path as needed

const CopyButton = ({ text }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// Fallback for older browsers
			const textarea = document.createElement("textarea");
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className="p-1 rounded-md text-[#e1ff51]/40 hover:text-[#e1ff51] hover:bg-[#e1ff51]/10 transition-all duration-200"
			aria-label={`Copy ${text}`}
		>
			{copied ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-3.5 h-3.5"
				>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-3.5 h-3.5"
				>
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
				</svg>
			)}
		</button>
	);
};

const ContactSection = () => {
	// Quick-access digital destination mapping
	const socialLinks = [
		{ name: "GitHub", url: "https://github.com/Muhtasim-Zawad" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/mzawad/" },
		{ name: "Instagram", url: "https://www.instagram.com/zawad_esque/" },
		{
			name: "Resume",
			url: "https://drive.google.com/file/d/1GFnqTWCBsl8fLsC4TGrhWOTnVw-rogi2/view?usp=sharing",
		},
	];

	return (
		<section
			id="contact"
			className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-between p-6 md:p-12 selection:bg-[#ce3421] selection:text-[#00272c]"
		>
			{/* Spacer layer to push layout nodes cleanly into position */}
			<div className="hidden md:block" />

			{/* ========================================================= */}
			{/* MAIN BODY CONTENTS                                        */}
			{/* ========================================================= */}
			<div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-12 my-auto py-12">
				{/* Staggered Text Swipe Up Header */}
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
						{"LET'S GET IN TOUCH".split("").map((letter, index) => (
							<span
								key={`contact-title-${index}`}
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

				{/* Sub-text Context CTA */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="text-base md:text-xl font-medium leading-relaxed max-w-xl text-center text-[#e1ff51]/80"
				>
					Have an interesting project, dynamic research workflow, or full-stack
					application you'd like to collaborate on? Let's build it.
				</motion.p>

				{/* Contact Info Row */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5, duration: 0.6 }}
					className="flex flex-col items-center gap-3 text-sm md:text-base font-bold tracking-wide text-[#e1ff51]/70"
				>
					<span className="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-4 h-4"
						>
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
						</svg>
						+880 1402797177
						<CopyButton text="+1 (234) 567-890" />
					</span>
					<span className="flex items-center gap-1.5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-4 h-4"
						>
							<rect x="2" y="4" width="20" height="16" rx="2" />
							<polyline points="2,4 12,13 22,4" />
						</svg>
						muhtasimzawad.jfcl@gmail.com
						<CopyButton text="muhtasimzawad.jfcl@gmail.com" />
					</span>
				</motion.div>

				{/* Modular Button Trigger (Flipped style variables via Tailwind modifiers) */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<AnimatedButton
						onClick={() =>
							window.open("mailto:muhtasimzawad.jfcl@gmail.com", "_blank")
						}
						className="!bg-[#ce3421] !text-[#00272c] border border-[#ce3421] hover:!text-[#ce3421]"
					>
						Send An Email
					</AnimatedButton>
				</motion.div>
			</div>

			{/* ========================================================= */}
			{/* FOOTER NAV / NETWORKS GRID ROW                            */}
			{/* ========================================================= */}
			<div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-[#e1ff51]/20 pt-8 uppercase text-[10px] md:text-xs font-bold tracking-widest">
				{/* Social Navigation Node */}
				<div className="flex gap-6">
					{socialLinks.map((link, idx) => (
						<motion.a
							key={idx}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -2 }}
							className="hover:text-white/80 transition-colors duration-200"
						>
							{link.name}
						</motion.a>
					))}
				</div>

				{/* Standard Design Baseline Copyright Meta */}
				<div className="text-[#e1ff51]/50 text-center sm:text-right">
					© 2026 — Muhtasim Zawad
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
