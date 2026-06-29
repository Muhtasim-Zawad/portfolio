import React from "react";
import { motion } from "motion/react";
import AnimatedButton from "../common/Button"; // Adjust the import path as needed

const ContactSection = () => {
	// Quick-access digital destination mapping
	const socialLinks = [
		{ name: "GitHub", url: "https://github.com" },
		{ name: "LinkedIn", url: "https://linkedin.com" },
		{ name: "Twitter / X", url: "https://x.com" },
	];

	return (
		<section className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-between p-6 md:p-12 selection:bg-[#e1ff51] selection:text-[#00272c]">
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
						{"SAY HELLO".split("").map((letter, index) => (
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

				{/* Modular Button Trigger (Flipped style variables via Tailwind modifiers) */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<AnimatedButton
						onClick={() =>
							(window.location.href = "mailto:your.email@example.com")
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
					© 2026 — All Rights Reserved
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
