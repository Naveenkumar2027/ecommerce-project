import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/weddings", name: "Weddings", imageUrl: "/wedding.jpg" },
	{ href: "/engagements", name: "Engagements", imageUrl: "/engagement.jpg" },
	{ href: "/anniversaries", name: "Anniversaries", imageUrl: "/anniverseries.jpg" },
	{ href: "/birthday-parties", name: "Birthday parties", imageUrl: "/birthday parties.jpg" },
	{ href: "/naming-ceremonies", name: "Naming ceremonies", imageUrl: "/naming ceremony.jpg" },
	{ href: "/family-reunions", name: "Family reunions", imageUrl: "/family reunions.jpg" },
	{ href: "/retirement-parties", name: "Retirement Parties", imageUrl: "/retirement parties.jpg" },
	{ href: "/corporate-parties", name: "Corporate Parties", imageUrl: "/corporate parties.jpg" },
	{ href: "/educational-events", name: "Educational events", imageUrl: "/educational events.jpg" },
	{ href: "/promotional-events", name: "Promotional events", imageUrl: "/promotional events.jpg" },
	{ href: "/entertainment-events", name: "Entertainment events", imageUrl: "/entertainment events.jpg" },
	{ href: "/religious-events", name: "Religious events", imageUrl: "/religious events.jpg" },
	{ href: "/pre-wedding-shoots", name: "Pre-wedding shoots", imageUrl: "/prewedding shoots.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Occasia - Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
