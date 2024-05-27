// components/NavBar.js
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationLinks } from "@/constants/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		// setIsOpen(!isOpen);
	};

	return (
		<motion.div variants={navVariants}>
			<header className="sticky z-50 top- uppercase">
				<nav className="">
					<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
						<div className=" ">
							<Link
								href="/"
								className="  fill-primary font-playfair  translate-x-[30deg]"
							>
								<Image
									src={"/logo.svg"}
									width={100}
									height={100}
									alt="alfredo's logo"
								/>
							</Link>
						</div>
						<div className="hidden md:flex space-x-6">
							{navigationLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="hover:text-primary transition-all"
								>
									{link.name}
								</Link>
							))}
						</div>
						<div className="hidden md:block hover:-translate-x-2 transition-all ">
							<Link
								href="/contact"
								className="hover:text-primary border-[1px] border-primary transition-all -hover:translate-x-2  py-3 px-6 "
							>
								Contact Us
							</Link>
						</div>
						<div className="md:hidden">
							<button onClick={toggleMenu}>
								{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
							</button>
						</div>
					</div>
					{isOpen && (
						<div className="md:hidden bg-white shadow-md">
							<div className="px-4 py-2 space-y-2">
								{navigationLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="block  hover:text-primary transition-all"
									>
										{link.name}
									</Link>
								))}
								<Link
									href="/contact"
									className="block  py-2 px-4 rounded-md text-center hover:text-primary transition-all"
								>
									Contact Us
								</Link>
							</div>
						</div>
					)}
				</nav>
			</header>
		</motion.div>
	);
};

export default NavBar;
