import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import ServiceManager from "../components/ServiceManager";

const homepageCategories = [
	"weddings",
	"engagements",
	"anniversaries",
	"birthday-parties",
	"naming-ceremonies",
	"family-reunions",
	"retirement-parties",
	"corporate-parties",
	"educational-events",
	"promotional-events",
	"entertainment-events",
	"religious-events",
	"pre-wedding-shoots",
];

const categoryImages = {
	"weddings": "/wedding.jpg",
	"engagements": "/engagement.jpg",
	"anniversaries": "/anniverseries.jpg",
	"birthday-parties": "/birthday parties.jpg",
	"naming-ceremonies": "/naming ceremony.jpg",
	"family-reunions": "/family reunions.jpg",
	"retirement-parties": "/retirement parties.jpg",
	"corporate-parties": "/corporate parties.jpg",
	"educational-events": "/educational events.jpg",
	"promotional-events": "/promotional events.jpg",
	"entertainment-events": "/entertainment events.jpg",
	"religious-events": "/religious events.jpg",
	"pre-wedding-shoots": "/prewedding shoots.jpg",
};

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();

	const { category } = useParams();

	useEffect(() => {
		if (category !== "photography" && !homepageCategories.includes(category)) {
			fetchProductsByCategory(category);
		}
	}, [fetchProductsByCategory, category]);

	console.log("products:", products);
	return (
		<div className='min-h-screen'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<motion.h1
					className='text-center text-4xl sm:text-5xl font-bold text-emerald-400 mb-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</motion.h1>
				{homepageCategories.includes(category) && (
					<div className="flex justify-center mb-8">
						<img
							src={categoryImages[category]}
							alt={category}
							className="w-96 h-auto rounded-lg shadow-lg"
						/>
					</div>
				)}

				{category === "photography" ? (
					<PhotographerProfiles />
				) : homepageCategories.includes(category) ? (
					<ServiceManager />
				) : (
					<motion.div
						className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{products?.length === 0 && (
							<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
								No products found
							</h2>
						)}

						{products?.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};
export default CategoryPage;
