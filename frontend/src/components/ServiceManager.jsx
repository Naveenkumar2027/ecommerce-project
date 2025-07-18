import React, { useState } from "react";
import BookingForm from "./BookingForm";
import LoginModal from "./LoginModal";
import { useUserStore } from "../stores/useUserStore";

const allServices = {
	venue: [
		{
			id: 1,
			name: "John Smith",
			profession: "Venue Manager",
			rating: 4.8,
			tagline: "Experienced venue manager for all event types.",
			description: "John Smith has over 15 years of experience managing a wide variety of venues for events ranging from intimate gatherings to large-scale corporate functions. His expertise includes coordinating logistics, managing vendor relationships, and ensuring that every event runs smoothly. John is known for his attention to detail and ability to customize venues to meet client needs, creating memorable experiences for guests. He is skilled in managing both indoor and outdoor spaces, with a focus on safety, accessibility, and ambiance. His dedication to client satisfaction and professional approach make him a trusted partner for any event planning team.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Emily Johnson",
			profession: "Venue Manager",
			rating: 4.7,
			tagline: "Specializes in large and small venues.",
			description: "Emily Johnson specializes in managing venues of all sizes, from cozy banquet halls to expansive outdoor spaces. With a background in hospitality management, she excels at coordinating event setups, overseeing maintenance, and ensuring compliance with safety regulations. Emily's proactive communication style and problem-solving skills help her anticipate and address challenges before they arise. She is passionate about creating welcoming environments that enhance the overall event experience, working closely with clients to tailor venue arrangements to their specific needs.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Michael Brown",
			profession: "Venue Manager",
			rating: 4.6,
			tagline: "Expert in outdoor and indoor venues.",
			description: "Michael Brown brings extensive experience in managing both outdoor and indoor venues, ensuring that each event space is optimized for comfort and functionality. He has a keen eye for design and logistics, coordinating with decorators, caterers, and technical teams to deliver seamless event experiences. Michael is adept at handling last-minute changes and unexpected issues, maintaining calm and professionalism under pressure. His commitment to excellence and client satisfaction has earned him a reputation as a reliable venue manager in the industry.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Jessica Davis",
			profession: "Venue Manager",
			rating: 4.5,
			tagline: "Providing elegant venue management services.",
			description: "Jessica Davis is known for her elegant approach to venue management, focusing on creating sophisticated and stylish event spaces. She collaborates closely with clients to understand their vision and works diligently to bring it to life through meticulous planning and coordination. Jessica's expertise includes managing vendor contracts, overseeing event timelines, and ensuring that all aspects of the venue meet high standards of quality and safety. Her passion for excellence and attention to detail make her a valuable asset to any event planning team.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "David Wilson",
			profession: "Venue Manager",
			rating: 4.4,
			tagline: "Reliable and professional venue manager.",
			description: "David Wilson is a reliable and professional venue manager with a strong track record of successful event executions. He is skilled in managing logistics, coordinating with multiple stakeholders, and ensuring that venues are prepared to meet the unique requirements of each event. David's approachable demeanor and effective communication skills help build strong relationships with clients and vendors alike. He is committed to delivering high-quality service and creating memorable event experiences.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	decorators: [
		{
			id: 1,
			name: "Sarah Miller",
			profession: "Decorator Manager",
			rating: 4.9,
			tagline: "Expert floral and event decoration services.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "James Anderson",
			profession: "Decorator Manager",
			rating: 4.8,
			tagline: "Creating memorable event atmospheres.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Patricia Thomas",
			profession: "Decorator Manager",
			rating: 4.7,
			tagline: "Specializes in wedding and corporate decorations.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Robert Jackson",
			profession: "Decorator Manager",
			rating: 4.6,
			tagline: "Innovative and creative decoration solutions.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Linda White",
			profession: "Decorator Manager",
			rating: 4.5,
			tagline: "Reliable and professional decorator manager.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	avAndTechnicalDj: [
		{
			id: 1,
			name: "William Harris",
			profession: "AV and Technical DJ Manager",
			rating: 4.9,
			tagline: "Experienced DJ and technical manager with over 10 years of experience in managing sound and lighting for various events. William is known for his attention to detail and ability to create the perfect atmosphere through technical expertise.",
			description: "William Harris has a deep passion for music and technology, combining both to deliver exceptional AV experiences. He has worked with numerous high-profile clients, ensuring flawless execution of sound systems, lighting setups, and DJ performances. His commitment to quality and client satisfaction makes him a sought-after professional in the event industry.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Barbara Martin",
			profession: "AV and Technical DJ Manager",
			rating: 4.8,
			tagline: "Specializes in sound and lighting.",
			description: "Barbara Martin is an expert in sound engineering and lighting design, providing tailored solutions for weddings, corporate events, and concerts. Her technical skills and creative approach help transform venues into immersive experiences that captivate audiences.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Richard Lee",
			profession: "AV and Technical DJ Manager",
			rating: 4.7,
			tagline: "Expert in event AV management.",
			description: "Richard Lee has extensive experience in managing AV equipment and DJ performances for a wide range of events. He is adept at troubleshooting technical issues and ensuring seamless integration of audio and visual elements to enhance event quality.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Susan Walker",
			profession: "AV and Technical DJ Manager",
			rating: 4.6,
			tagline: "Reliable and professional DJ manager.",
			description: "Susan Walker is known for her professionalism and reliability in managing DJ and AV services. She works closely with clients to understand their vision and delivers customized technical solutions that meet their event needs.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Joseph Hall",
			profession: "AV and Technical DJ Manager",
			rating: 4.5,
			tagline: "Creative and innovative DJ services.",
			description: "Joseph Hall brings creativity and innovation to every event he manages. With a strong background in music and technology, he ensures that each performance is unique and memorable, combining technical skill with artistic flair.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	singers: [
		{
			id: 1,
			name: "Karen Allen",
			profession: "Singer Manager",
			rating: 4.9,
			tagline: "Experienced singer manager for all genres.",
			description: "Karen Allen is a versatile singer manager with over 12 years of experience managing vocalists across various music genres. She has a keen ear for talent and a passion for nurturing artists to reach their full potential. Karen coordinates live performances, studio recordings, and promotional events, ensuring her singers deliver captivating shows. Her extensive network in the music industry and dedication to artist development make her a valuable asset to any event or production.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Charles Young",
			profession: "Singer Manager",
			rating: 4.8,
			tagline: "Specializes in live performances.",
			description: "Charles Young specializes in managing live performances for singers, focusing on creating memorable experiences for audiences. With a background in event production, he ensures seamless coordination between artists, venues, and technical teams. Charles is known for his professionalism and ability to handle high-pressure situations with ease, making him a trusted manager for live music events.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Nancy King",
			profession: "Singer Manager",
			rating: 4.7,
			tagline: "Expert in event entertainment.",
			description: "Nancy King brings a wealth of experience in event entertainment management, specializing in vocal performances. She works closely with singers to develop setlists, rehearse performances, and engage with audiences. Nancy's attention to detail and commitment to excellence ensure that every event she manages is a success.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Daniel Wright",
			profession: "Singer Manager",
			rating: 4.6,
			tagline: "Reliable and professional singer manager.",
			description: "Daniel Wright is known for his reliability and professionalism in managing singers for a variety of events. He handles scheduling, contract negotiations, and client communications with efficiency and care. Daniel's goal is to provide a supportive environment for artists to thrive and deliver outstanding performances.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Lisa Scott",
			profession: "Singer Manager",
			rating: 4.5,
			tagline: "Creative and innovative singer services.",
			description: "Lisa Scott brings creativity and innovation to her role as a singer manager, helping artists explore new styles and reach diverse audiences. She is passionate about music and dedicated to fostering artistic growth, making her a dynamic presence in the music management field.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	dancers: [
		{
			id: 1,
			name: "Matthew Green",
			profession: "Dancer Manager",
			rating: 4.9,
			tagline: "Experienced dancer manager for all dance styles.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Betty Adams",
			profession: "Dancer Manager",
			rating: 4.8,
			tagline: "Specializes in choreography and performances.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Mark Baker",
			profession: "Dancer Manager",
			rating: 4.7,
			tagline: "Expert in event dance management.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Sandra Nelson",
			profession: "Dancer Manager",
			rating: 4.6,
			tagline: "Reliable and professional dancer manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Paul Carter",
			profession: "Dancer Manager",
			rating: 4.5,
			tagline: "Creative and innovative dance services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	catering: [
		{
			id: 1,
			name: "Steven Mitchell",
			profession: "Catering Manager",
			rating: 4.9,
			tagline: "Experienced catering manager for all event types.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Donna Perez",
			profession: "Catering Manager",
			rating: 4.8,
			tagline: "Specializes in menu planning and execution.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "George Roberts",
			profession: "Catering Manager",
			rating: 4.7,
			tagline: "Expert in large and small event catering.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Michelle Turner",
			profession: "Catering Manager",
			rating: 4.6,
			tagline: "Reliable and professional catering manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Brian Phillips",
			profession: "Catering Manager",
			rating: 4.5,
			tagline: "Creative and innovative catering services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	purohits: [
		{
			id: 1,
			name: "Rajesh Sharma",
			profession: "Purohit Manager",
			rating: 4.9,
			tagline: "Experienced purohit manager for religious ceremonies.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Anita Patel",
			profession: "Purohit Manager",
			rating: 4.8,
			tagline: "Specializes in traditional rituals.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Suresh Kumar",
			profession: "Purohit Manager",
			rating: 4.7,
			tagline: "Expert in religious event management.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Sunita Joshi",
			profession: "Purohit Manager",
			rating: 4.6,
			tagline: "Reliable and professional purohit manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Vikram Singh",
			profession: "Purohit Manager",
			rating: 4.5,
			tagline: "Creative and innovative purohit services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	photographers: [
		{
			id: 1,
			name: "Alice Johnson",
			profession: "Photographer Manager",
			rating: 4.8,
			tagline: "Specializes in wedding and event photography with over 10 years of experience.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Bob Smith",
			profession: "Photographer Manager",
			rating: 4.6,
			tagline: "Expert in portrait and fashion photography with a creative approach.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Carol Lee",
			profession: "Photographer Manager",
			rating: 4.5,
			tagline: "Experienced in various photography styles.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "David Kim",
			profession: "Photographer Manager",
			rating: 4.4,
			tagline: "Reliable and professional photographer manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Eva Martinez",
			profession: "Photographer Manager",
			rating: 4.3,
			tagline: "Creative and innovative photography services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	hospitalityStaff: [
		{
			id: 1,
			name: "John Doe",
			profession: "Hospitality Manager",
			rating: 4.8,
			tagline: "Experienced hospitality manager for events.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Jane Smith",
			profession: "Hospitality Manager",
			rating: 4.7,
			tagline: "Specializes in guest services and management.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Michael Johnson",
			profession: "Hospitality Manager",
			rating: 4.6,
			tagline: "Expert in event hospitality management.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Emily Davis",
			profession: "Hospitality Manager",
			rating: 4.5,
			tagline: "Reliable and professional hospitality manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "William Brown",
			profession: "Hospitality Manager",
			rating: 4.4,
			tagline: "Creative and innovative hospitality services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	securityStaff: [
		{
			id: 1,
			name: "Robert Wilson",
			profession: "Security Manager",
			rating: 4.8,
			tagline: "Experienced security manager for events.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Linda Martinez",
			profession: "Security Manager",
			rating: 4.7,
			tagline: "Specializes in event security and safety.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "James Anderson",
			profession: "Security Manager",
			rating: 4.6,
			tagline: "Expert in crowd control and safety measures.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Patricia Thomas",
			profession: "Security Manager",
			rating: 4.5,
			tagline: "Reliable and professional security manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Michael Lee",
			profession: "Security Manager",
			rating: 4.4,
			tagline: "Creative and innovative security services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
	stylists: [
		{
			id: 1,
			name: "Jessica Taylor",
			profession: "Stylist Manager",
			rating: 4.8,
			tagline: "Experienced stylist manager for events.",
			imageUrl: "/photographers/1093256.jpg",
		},
		{
			id: 2,
			name: "Daniel Harris",
			profession: "Stylist Manager",
			rating: 4.7,
			tagline: "Specializes in fashion and event styling.",
			imageUrl: "/photographers/2562964.jpg",
		},
		{
			id: 3,
			name: "Laura Clark",
			profession: "Stylist Manager",
			rating: 4.6,
			tagline: "Expert in personal and event styling.",
			imageUrl: "/photographers/images_unsplash_com__photo-1592009309602-1dde752490ae.jpg",
		},
		{
			id: 4,
			name: "Matthew Lewis",
			profession: "Stylist Manager",
			rating: 4.5,
			tagline: "Reliable and professional stylist manager.",
			imageUrl: "/photographers/man-7799486__480.jpg",
		},
		{
			id: 5,
			name: "Olivia Walker",
			profession: "Stylist Manager",
			rating: 4.4,
			tagline: "Creative and innovative styling services.",
			imageUrl: "/photographers/pexels-photo-2379004.jpg",
		},
	],
};

const serviceOptions = [
	{ name: "venue", imageUrl: "/services/venue.jpg" },
	{ name: "decorators", imageUrl: "/services/decorators.jpg" },
	{ name: "av-and-technical-dj", imageUrl: "/services/av and technical dj.jpg" },
	{ name: "singers", imageUrl: "/services/singers.jpg" },
	{ name: "dancers", imageUrl: "/services/dancers.jpg" },
	{ name: "catering", imageUrl: "/services/catering.jpg" },
	{ name: "purohits", imageUrl: "/services/purohit.jpg" },
	{ name: "photographers", imageUrl: "/services/photgraphers.jpg" },
	{ name: "hospitality-staff", imageUrl: "/services/hospitality.jpg" },
	{ name: "security-staff", imageUrl: "/services/security.jpg" },
	{ name: "stylists", imageUrl: "/services/stylists.jpg" },
];

const ServiceManager = () => {
	const [selectedService, setSelectedService] = useState(null);
	const [bookingProfessional, setBookingProfessional] = useState(null);
	const [exploreProfessional, setExploreProfessional] = useState(null);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [pendingBookingProfessional, setPendingBookingProfessional] = useState(null);

	const user = useUserStore((state) => state.user);

	const handleServiceClick = (serviceName) => {
		setSelectedService(serviceName);
	};

	const handleBackToServices = () => {
		setSelectedService(null);
		setExploreProfessional(null);
	};

	const openBookingForm = (professional) => {
		if (!user) {
			setPendingBookingProfessional(professional);
			setShowLoginModal(true);
		} else {
			setBookingProfessional(professional);
		}
	};

	const closeBookingForm = () => {
		setBookingProfessional(null);
	};

	const openExplore = (professional) => {
		setExploreProfessional(professional);
	};

	const closeExplore = () => {
		setExploreProfessional(null);
	};

	const handleLoginSuccess = () => {
		setShowLoginModal(false);
		if (pendingBookingProfessional) {
			setBookingProfessional(pendingBookingProfessional);
			setPendingBookingProfessional(null);
		}
	};

	return (
		<div>
			{!selectedService && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{serviceOptions.map((option) => (
						<div
							key={option.name}
							onClick={() => handleServiceClick(option.name)}
							className="cursor-pointer"
						>
							<div className="relative overflow-hidden h-96 w-full rounded-lg group">
								<div className="w-full h-full cursor-pointer">
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10" />
									<img
										src={option.imageUrl}
										alt={option.name}
										className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
										loading="lazy"
									/>
									<div className="absolute bottom-0 left-0 right-0 p-4 z-20">
										<h3 className="text-white text-2xl font-bold mb-2">{option.name}</h3>
										<p className="text-gray-200 text-sm">Explore {option.name}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			{selectedService && !exploreProfessional && (
				<div>
					<button
						onClick={handleBackToServices}
						className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
					>
						Back to Services
					</button>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{allServices[selectedService]?.map((pro) => (
							<div
								key={pro.id}
								className="relative bg-gray-800 rounded-lg p-6 flex flex-col items-center"
							>
								<img
									src={pro.imageUrl}
									alt={pro.name}
									className="w-24 h-24 rounded-full object-cover mb-4"
								/>
								<h3 className="text-xl font-semibold text-white">{pro.name}</h3>
								<p className="text-gray-300">{pro.profession}</p>
								<p className="text-yellow-400 mt-1">Rating: {pro.rating} / 5</p>
								<p className="text-gray-300 mt-2 text-center">{pro.tagline}</p>
								<div className="mt-4 w-full flex flex-col items-center">
									<button
										className="w-full mb-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
										onClick={() => openBookingForm(pro)}
									>
										Book Now
									</button>
									<button
										className="w-full px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
										onClick={() => openExplore(pro)}
									>
										Explore
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

{exploreProfessional && (
	<div className="p-6 bg-gray-900 rounded-lg text-white max-w-3xl mx-auto">
		<button
			onClick={() => setExploreProfessional(null)}
			className="mb-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
		>
			Back to {selectedService} Profiles
		</button>
		<img
			src={exploreProfessional.imageUrl}
			alt={exploreProfessional.name}
			className="w-48 h-48 rounded-full object-cover mb-4 mx-auto"
		/>
		<h2 className="text-3xl font-bold mb-2">{exploreProfessional.name}</h2>
		<p className="text-lg mb-2">{exploreProfessional.profession}</p>
		<p className="mb-2">Rating: {exploreProfessional.rating} / 5</p>
		<p className="mb-4 whitespace-pre-line">{exploreProfessional.tagline}</p>
		<p className="mb-4 whitespace-pre-line">{exploreProfessional.description}</p>
	</div>
)}

			{bookingProfessional && (
				<BookingForm professional={bookingProfessional} onClose={closeBookingForm} />
			)}

			{showLoginModal && (
				<LoginModal
					onClose={() => setShowLoginModal(false)}
					onLoginSuccess={handleLoginSuccess}
				/>
			)}
		</div>
	);
};

export default ServiceManager;
