import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/home/Hero";
import Products from "@/components/sections/home/Products";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import FashionQuote from "@/components/sections/home/FashionQuote";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="overflow-hidden"
		>
			<main>
				<div className="text-gray-100 hero-stars min-h-[100dvh] overflow-hidden">
					<Hero />
				</div>
				<div className="bg-[##F5F5F7]">
					<Products />
				</div>
				<Footer />
			</main>
		</motion.div>
	);
}
