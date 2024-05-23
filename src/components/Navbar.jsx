// components/NavBar.js
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationLinks } from "@/constants/constants";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="sticky z-50 top-0">
			<nav className="">
				<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
					<div className="italic ">
						<Link
							href="/"
							className="skew-y-[45deg]  text-primary font-playfair  translate-x-[30deg]"
						>
							Alfredo
						</Link>
					</div>
					<div className="hidden md:flex space-x-6">
						{navigationLinks.map((link) => (
							<Link key={link.name} href={link.href} className="">
								{link.name}
							</Link>
						))}
					</div>
					<div className="hidden md:block">
						<Link href="/contact" className=" py-2 px-4 ">
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
								<Link key={link.name} href={link.href} className="block ">
									{link.name}
								</Link>
							))}
							<Link
								href="/contact"
								className="block  py-2 px-4 rounded-md text-center"
							>
								Contact Us
							</Link>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default NavBar;
