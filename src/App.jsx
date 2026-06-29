import { useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import DragCrad from "./Second";
import HeroSection from "./components/sections/Hero";
import AnimatedButton from "./components/common/Button";
import AboutSection from "./components/sections/About";
import ProjectsSection from "./components/sections/Projects";
import SkillsSection from "./components/sections/Skills";
import ContactSection from "./components/sections/Contact";

function App() {
	return (
		<>
			<div>
				{/* <AnimatedButton /> */}
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</>
	);
}

export default App;
