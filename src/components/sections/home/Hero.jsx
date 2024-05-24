import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroDescription = () => {
	return (
		<div className="  pt-16 lg:pt-24 lg:px-24 xl:pt-32 xl:px-48 sm:px-8 text-center sm:text-left  flex flex-col justify-center items-center ">
			<div className=" px-4 max-w-[400px]">
				<h1 className="text-6xl uppercase tracking-wider font-playfair font-thin  ">
					<span className=" font-bold"></span> Alfredo <br />{" "}
					<span className="flex  gap-2 md:gap-8 items-center">
						{" "}
						<Image
							src={"/suit.svg"}
							height={100}
							width={100}
							alt="a suit svg"
							className="w-12 sm:w-14  lg:w-16 ml-8 "
						/>{" "}
						Store
					</span>
				</h1>
				<p className="mt-6 text-[16px] ">
					Discover the finest collection of premium Italian and Turkey suits for
					men . All Perfected with a touch of Class and Elegance
				</p>
				<Link
					href="/collection"
					className="mt-10 hover:translate-x-2 transition-all tracking-wider  inline-block border-[0.4px] border-primary text-primary py-3 px-6 uppercase "
				>
					Explore Collection
				</Link>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className=" min-h-[100dvh] max-w-7xl mx-auto flex flex-col justify-between sm:block  pb-32 md:pb-4 ">
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
