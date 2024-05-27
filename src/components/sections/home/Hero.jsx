import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/MovingBorder";
import TypingText from "@/components/TypingTexts";
import { motion } from "framer-motion";
import {
	slideIn,
	textVariant,
	textVariant2,
	textVariant3,
} from "@/utils/motion";

const HeroDescription = () => {
	return (
		<div className="  pt-16 lg:pt-24 lg:px-24 xl:pt-32 xl:px-48 sm:px-8 text-center sm:text-left  flex flex-col justify-center items-center ">
			<div className=" px-4 max-w-[400px]">
				<motion.h1
					variants={textVariant2}
					className={`text-6xl  font- uppercase tracking-widest `}
				>
					<span className=" font-thin  "></span> Alfredo <br />{" "}
					{/* <TypingText title={"Alfredo"} textStyles={""} /> */}
					<motion.span
						variants={textVariant2}
						className="flex -z-10  gap-2 md:gap-8 items-center  text-5xl font-thin"
					>
						{" "}
						<Image
							src={"/suit.svg"}
							height={100}
							width={100}
							alt="a suit svg"
							className="w-12 sm:w-14  lg:w-16 ml-8  "
						/>{" "}
						{/* <TypingText title={"Store"} textStyles={"text-5xl font-thin"} /> */}
						Store
					</motion.span>
				</motion.h1>
				<motion.p
					variants={textVariant2}
					className="mt-6 text-[16px] my-4 font-light "
				>
					Discover the finest collection of premium Italian and Turkey suits for
					men . All Perfected with a touch of Class and Elegance
				</motion.p>
				<motion.div
					variants={textVariant2}
					className="hover:translate-x-4 transition-all"
				>
					<Button
						borderRadius="0rem"
						className=" uppercase  px-4 py-6 bg-transparent border-[1px] border-primary text-primary   "
					>
						<div className="flex  justify-center items-center">
							<span className="mr-2">explore collection</span>
							<span></span>{" "}
						</div>
					</Button>
				</motion.div>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className=" min-h-[100dvh] max-w-7xl mx-auto flex flex-col justify-between sm:block  pb-32 md:pb-4 ">
			<Spotlight />
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
