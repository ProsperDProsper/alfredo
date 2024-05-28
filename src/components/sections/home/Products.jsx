import React from "react";
import { products } from "@/constants/constants";
import { twMerge } from "tailwind-merge";
import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import FashionQuote from "./FashionQuote";
const Products = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			<FashionQuote />
			<ol className=" list-disc text-gray-400 flex justify-center items-center gap-4 tracking-widest text-sm uppercase ">
				<li className="list-none mr-4 ">fashion</li>
				<li className="mr-4">Elegance</li>
				<li className="">luxury</li>
			</ol>
			<h2 className="text-4xl text-gray-600 font-bold text-center">
				Explore Our <span className="text-[#febc5d]"> Products</span>
			</h2>
			<motion.div
				viewport={{ once: false, amount: 0.25 }}
				variants={textVariant2}
			>
				<p className="mt-4 text-center text-lg text-gray-600 max-w-xl mx-auto">
					Discover the finest collection of men&apos;s fashion. From stylish
					suits to casual jeans, we have everything you need to look your best.
				</p>
			</motion.div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-8 mt-8 min-h-[120dvh] lg:h-[150dvh] max-w-5xl mx-auto">
				{products.map((product) => (
					<motion.div
						variants={textVariant2}
						key={product.id}
						className={twMerge(
							"bg-white shadow-md min-h-48 overflow-hidden rounded-xl relative cursor-pointer ",
							product.styles
						)}
					>
						<Image
							width={500}
							height={500}
							src={product.image}
							alt={product.name}
							className="w-full  md:h-[100%] object-cover  hover:scale-[1.1] transition-all"
						/>
						<div className="absolute bottom-4  left-4   rounded-md flex bg-primary px-6 py-2 text-gray-100">
							<h3 className=" uppercase text-[#ffe9c9]">{product.name}</h3>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Products;

// // components/ProductsSection.js
// import React from "react";
// import { products } from "@/constants/constants";
// const Products = () => {
// 	return (
// 		<div className="max-w-7xl mx-auto px-4 py-12">
// 			<h2 className="text-4xl text-gray-600 font-bold text-center">
// 				Explore Our Products
// 			</h2>
// 			<p className="mt-4 text-center text-lg text-gray-600 max-w-xl mx-auto">
// 				Discover the finest collection of men's fashion. From stylish suits to
// 				casual jeans, we have everything you need to look your best.
// 			</p>
// 			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
// 				{products.map((product) => (
// 					<div
// 						key={product.id}
// 						className="bg-white shadow-md rounded-lg overflow-hidden relative cursor-pointer "
// 					>
// 						<img
// 							src={product.image}
// 							alt={product.name}
// 							className="w-full h-48 object-cover hover:scale-[1.2] transition-all"
// 						/>
// 						<div className="absolute bottom-0 right-0 left-0 bg-transparent p-4 text-gray-200">
// 							<h3 className="text-xl font-bold">{product.name}</h3>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Products;
// components/ProductsSection.js
