import React from "react";
import { motion } from "motion/react";

const AnimatedButton = ({
	children = "SEE FULL LIST",
	onClick,
	className = "",
	...props
}) => {
	// The hover background (gold) slides up from the bottom
	const bgVariants = {
		initial: { y: "100%" },
		hover: { y: "0%" },
	};

	// The text color swaps smoothly to maintain contrast
	const textVariants = {
		initial: { color: "#e1ff51" }, // Gold text on black background
		hover: { color: "#000000" }, // Black text on gold background
	};

	return (
		<motion.button
			onClick={onClick}
			initial="initial"
			whileHover="hover"
			whileTap={{ scale: 0.98 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 25,
			}}
			className={`
        relative overflow-hidden
        inline-flex items-center justify-center
        bg-black text-[#FCD385] 
        font-bold text-xs uppercase tracking-[0.15em]
        px-8 py-5 rounded-full
        shadow-md hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2
        cursor-pointer select-none
        ${className}
      `}
			{...props}
		>
			{/* 1. The Sliding Background Layer (Gold slide-up) */}
			<motion.div
				variants={bgVariants}
				transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
				className="absolute inset-0 bg-[#e1ff51] z-0"
			/>

			{/* 2. The Text Content Layer */}
			<motion.span
				variants={textVariants}
				transition={{ duration: 0.25 }}
				className="relative z-10"
			>
				{children}
			</motion.span>
		</motion.button>
	);
};

export default AnimatedButton;
