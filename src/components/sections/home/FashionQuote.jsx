// components/FashionQuote.js
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
import TypingText from "@/components/TypingTexts";
const FashionQuote = () => {
	return (
		<div className=" py-6 md:py-12 mb-4 px-2  mx-auto text-center">
			<motion.div variants={textVariant2} className=" mx-auto  text-center">
				<TypingText
					title={` "A good smile on the face and a clean, well-cut suit can do wonders." — Tom Ford`}
					textStyles={"w-[100%] md:text-3xl font-semibold text-gray-400 italic"}
				/>
			</motion.div>
		</div>
	);
};

export default FashionQuote;
