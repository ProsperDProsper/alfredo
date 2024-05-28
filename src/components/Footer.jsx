import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";

import Link from "next/link";

// TopFooter Component
const TopFooter = () => {
	return (
		<motion.div
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="  py-4"
		>
			<div className="flex border-b border-gray-300 py-4 flex-col md:flex-row justify-between items-center">
				<div>
					<p>© 2024 Alfredo Stores. All rights reserved.</p>
				</div>
				<div className="flex space-x-4 ">
					<Link
						href="/privacy-policy"
						className="text-gray-500 hover:text-gray-700"
					>
						Privacy Policy
					</Link>
					<Link
						href="/terms-and-conditions"
						className="text-gray-500 hover:text-gray-700"
					>
						Terms and Conditions
					</Link>
				</div>
			</div>
			<BottomFooter />
		</motion.div>
	);
};

// BottomFooter Component
const BottomFooter = () => {
	return (
		<div className="mt-4 text-center">
			<p>
				Developed by
				<a
					href="tel:+255782686548"
					className="font-bold ml-1 cursor-pointer text-primary"
				>
					{"  "}
					Prosper D.
				</a>
			</p>
		</div>
	);
};

// FooterSection Component
const Footer = () => {
	return (
		<footer className=" py-8 text-gray-500">
			<div className="container mx-auto">
				<TopFooter />
			</div>
		</footer>
	);
};

export default Footer;
