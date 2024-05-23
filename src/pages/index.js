import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/home/Hero";
import React from "react";
export default function Home() {
	return (
		<div>
			<main>
				<div className="text-gray-100 bg-black min-h-[100dvh] overflow-hidden">
					<Hero />
				</div>
			</main>
		</div>
	);
}
