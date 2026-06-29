import { useState } from "react";
import "./App.css";
import { motion } from "motion/react";
import DragCrad from "./Second";
import Divider from "./components/common/Divider";
import HeroSection from "./components/sections/Hero";
import AnimatedButton from "./components/common/Button";
import AboutSection from "./components/sections/About";
import EducationSection from "./components/sections/Education";
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
				<Divider />
				<EducationSection />
				<Divider />
				<ProjectsSection />
				<Divider />
				<SkillsSection />
				<Divider />
				<ContactSection />
			</div>
		</>
	);
}

export default App;
