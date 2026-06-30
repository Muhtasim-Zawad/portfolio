import React from "react";
import { motion, animate } from "motion/react";
import AnimatedButton from "../common/Button"; // Adjust the import path as needed

const AboutSection = () => {
	return (
		<section id="about" className="w-full min-h-screen bg-[#00272c] text-[#e1ff51] flex flex-col justify-center items-center p-6 md:p-12 selection:bg-[#ce3421] selection:text-[#00272c]">
			<div className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">
				{/* ========================================================= */}
				{/* STAGGERED TEXT SWIPE UP TITLE                             */}
				{/* ========================================================= */}
				<h2 className="text-[8vw] md:text-[5vw] font-black uppercase leading-none font-sans flex items-center justify-center">
					<motion.div
						className="flex overflow-hidden"
						initial="hidden"
						whileInView="visible" // Animates automatically when scrolled into view
						viewport={{ once: true, margin: "-100px" }}
						variants={{
							hidden: {},
							visible: { transition: { staggerChildren: 0.05 } },
						}}
					>
						{"ABOUT ME".split("").map((letter, index) => (
							// Handles empty spaces cleanly in the split array layout
							<span
								key={`about-${index}`}
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
				{/* CENTER ALIGNED DESCRIPTION PARAGRAPH                      */}
				{/* ========================================================= */}
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="text-base md:text-xl font-medium leading-relaxed max-w-2xl text-center text-[#e1ff51]/90"
				>
					I’m Muhtasim Zawad, a full-stack and AI/ML engineer focused on
					building intelligent systems that think, scale, and occasionally
					hallucinate with confidence. I engineer data-dense web platforms,
					scalable backend architectures, and multi-agent AI pipelines—paired
					with high-impact, typography-driven frontends.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="text-base md:text-xl font-medium leading-relaxed max-w-2xl text-center text-[#e1ff51]/90"
				>
					I have a deep appreciation for human ingenuity, resilience, and
					creativity, inspired by the likes of Tarkovsky, Rilke, Makhmalbaf, and
					concepts like the Alive Internet Theory. When I'm not orchestrating
					LangGraph workflows or optimizing data pipelines, you'll find me
					exploring world cinema, writing, or undergoing an existential crisis
					after a 3:00 AM BoJack or The Bear binge-watch session.
				</motion.p>

				{/* ========================================================= */}
				{/* INTERACTIVE BUTTONS LAYER                                 */}
				{/* ========================================================= */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
				>
					{/* Custom style mapping passed to match the inverted look */}
					<AnimatedButton
						onClick={() => {
							const el = document.getElementById("projects");
							if (!el) return;
							const yOffset = -20;
							const targetY = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
							const startY = window.pageYOffset;
							animate(startY, targetY, {
								duration: 2.5,
								ease: [0.16, 1, 0.3, 1],
								onUpdate: (value) => window.scrollTo(0, value),
							});
						}}
						className="!bg-[#ce3421] !text-[#00272c] border border-[#ce3421] hover:!text-[#ce3421]"
					>
						Explore Works
					</AnimatedButton>

					<AnimatedButton
						onClick={() => window.open("https://drive.google.com/file/d/1GFnqTWCBsl8fLsC4TGrhWOTnVw-rogi2/view?usp=sharing", "_blank")}
						className="!bg-transparent !text-[#ce3421] border border-[#ce3421] hover:!text-[#00272c]"
					>
						Download CV
					</AnimatedButton>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
