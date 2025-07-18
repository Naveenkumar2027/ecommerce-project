import { useState } from "react";
import CategoryItem from "./CategoryItem";
import ServiceProfiles from "./ServiceProfiles";

const serviceOptions = [
	{ href: "/venue", name: "venue", imageUrl: "/bags.jpg" },
	{ href: "/decorators", name: "decorators", imageUrl: "/bags.jpg" },
	{ href: "/av-and-technical-dj", name: "av-and-technical-dj", imageUrl: "/bags.jpg" },
	{ href: "/singers", name: "singers", imageUrl: "/bags.jpg" },
	{ href: "/dancers", name: "dancers", imageUrl: "/bags.jpg" },
	{ href: "/catering", name: "catering", imageUrl: "/bags.jpg" },
	{ href: "/purohits", name: "purohits", imageUrl: "/bags.jpg" },
	{ href: "/photographers", name: "photographers", imageUrl: "/bags.jpg" },
	{ href: "/hospitality-staff", name: "hospitality-staff", imageUrl: "/bags.jpg" },
	{ href: "/security-staff", name: "security-staff", imageUrl: "/bags.jpg" },
	{ href: "/stylists", name: "stylists", imageUrl: "/bags.jpg" },
];

const ServiceOptions = () => {
	const [selectedService, setSelectedService] = useState(null);

	const handleServiceClick = (serviceName) => {
		console.log("Service clicked:", serviceName);
		setSelectedService(serviceName);
	};

	const handleBack = () => {
		console.log("Back to service options");
		setSelectedService(null);
	};

	if (selectedService) {
		console.log("Rendering ServiceProfiles for:", selectedService);
		return <ServiceProfiles service={selectedService} onBack={handleBack} />;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{serviceOptions.map((option) => (
				<div key={option.name} onClick={() => handleServiceClick(option.name)} className="cursor-pointer">
					<CategoryItem category={option} />
				</div>
			))}
		</div>
	);
};

export default ServiceOptions;
