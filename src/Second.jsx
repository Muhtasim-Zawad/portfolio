import { motion } from "motion/react";

const cardStyle = {
	background: "white",
	border: "2px solid white",
	padding: "8px",
	borderRadius: "8px",
	fontWeight: "600",
	cursor: "grab",
	userSelect: "none",
};

export default function DragCrad() {
	return (
		<motion.div
			style={cardStyle}
			drag
			dragConstraints={{ left: -130, right: 130, top: -80, bottom: 80 }}
			dragElastic={0.5}
		>
			<motion.div style={{ color: "black" }}>Drag me Daddy!</motion.div>
		</motion.div>
	);
}
