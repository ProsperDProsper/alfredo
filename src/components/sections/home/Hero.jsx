import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroDescription = () => {
	return (
		<div className="  pt-10 sm:pt-12 md:pt-16 lg:pt-24 lg:px-24 xl:pt-32 xl:px-48 sm:px-8 text-center sm:text-left  flex flex-col justify-center items-center ">
			<div className=" px-4 max-w-[400px]">
				<h1 className="text-6xl uppercase tracking-wider font-playfair text-primary ">
					Alfredo <br /> Store
				</h1>
				<p className="mt-6 text-lg ">
					Discover the finest collection of high-class mengit inits suits and
					premium men attires.,
				</p>
				<Link
					href="/contact"
					className="mt-10  tracking-wider  inline-block border-[0.4px] border-gray-100  py-3 px-6 uppercase "
				>
					Contact Us
				</Link>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className=" min-h-[100dvh] max-w-7xl mx-auto    ">
			<Navbar />
			<div className=" relative z-10 flex items-center">
				<HeroDescription />
			</div>
			<div className="absolute inset-0">
				<div className="flex flex-col  justify-center items-center">
					<Image
						src="/alfredo.png"
						alt="About Us Background"
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						className="object-cover w-[100%]   "
						style={{ opacity: "50%" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
