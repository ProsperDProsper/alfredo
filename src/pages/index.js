import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/home/Hero";
import Products from "@/components/sections/home/Products";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
export default function Home() {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
		>
			<main>
				<div className="text-gray-100 hero-stars min-h-[100dvh] overflow-hidden">
					<Hero />
				</div>
				<div>
					<Products />
				</div>
			</main>
		</motion.div>
	);
}
