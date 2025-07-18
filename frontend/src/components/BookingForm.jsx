import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import LoginModal from "./LoginModal";

const BookingForm = ({ professional, onClose }) => {
	const [formData, setFormData] = useState({
		eventDate: "",
		eventTime: "",
		location: "",
		serviceRequirements: "",
		contactName: "",
		contactEmail: "",
		contactPhone: "",
	});
	const [errors, setErrors] = useState({});
	const [step, setStep] = useState(1);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [pendingSubmit, setPendingSubmit] = useState(false);

	const user = useUserStore((state) => state.user);

	const validateStep = () => {
		const newErrors = {};
		if (step === 1) {
			if (!formData.eventDate) newErrors.eventDate = "Event date is required";
			if (!formData.eventTime) newErrors.eventTime = "Event time is required";
		}
		if (step === 2) {
			if (!formData.location) newErrors.location = "Location is required";
			if (!formData.serviceRequirements) newErrors.serviceRequirements = "Service requirements are required";
		}
		if (step === 3) {
			if (!formData.contactName) newErrors.contactName = "Name is required";
			if (!formData.contactEmail) newErrors.contactEmail = "Email is required";
			if (!formData.contactPhone) newErrors.contactPhone = "Phone number is required";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleNext = () => {
		if (validateStep()) {
			setStep(step + 1);
		}
	};

	const handleBack = () => {
		setStep(step - 1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateStep()) {
			if (!user) {
				// User not authenticated, show login modal and pause booking
				setShowLoginModal(true);
				setPendingSubmit(true);
				return;
			}
			// Submit booking data here (e.g., API call)
			alert("Booking confirmed!");
			onClose();
		}
	};

	const handleLoginSuccess = () => {
		setShowLoginModal(false);
		if (pendingSubmit) {
			// Resume booking submission after login
			alert("Booking confirmed!");
			onClose();
		}
		setPendingSubmit(false);
	};

	return (
		<>
			{showLoginModal && (
				<LoginModal
					onClose={() => setShowLoginModal(false)}
					onLoginSuccess={handleLoginSuccess}
				/>
			)}
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
				<div className="bg-gray-900 rounded-lg p-6 w-full max-w-md text-white">
					<h2 className="text-2xl font-semibold mb-4">Book {professional.name}</h2>
					<form onSubmit={handleSubmit}>
						{step === 1 && (
							<div>
								<label className="block mb-2 font-medium">
									Event Date <span className="text-red-500">*</span>
								</label>
								<input
									type="date"
									name="eventDate"
									value={formData.eventDate}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.eventDate && <p className="text-red-500 mt-1">{errors.eventDate}</p>}

								<label className="block mt-4 mb-2 font-medium">
									Event Time <span className="text-red-500">*</span>
								</label>
								<input
									type="time"
									name="eventTime"
									value={formData.eventTime}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.eventTime && <p className="text-red-500 mt-1">{errors.eventTime}</p>}
							</div>
						)}
						{step === 2 && (
							<div>
								<label className="block mb-2 font-medium">
									Location <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="location"
									value={formData.location}
									onChange={handleChange}
									placeholder="Enter event location"
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.location && <p className="text-red-500 mt-1">{errors.location}</p>}

								<label className="block mt-4 mb-2 font-medium">
									Service-specific Requirements <span className="text-red-500">*</span>
								</label>
								<textarea
									name="serviceRequirements"
									value={formData.serviceRequirements}
									onChange={handleChange}
									rows={3}
									placeholder="E.g., Number of guests for catering"
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.serviceRequirements && (
									<p className="text-red-500 mt-1">{errors.serviceRequirements}</p>
								)}
							</div>
						)}
						{step === 3 && (
							<div>
								<label className="block mb-2 font-medium">
									Contact Name <span className="text-red-500">*</span>
								</label>
								<input
									type="text"
									name="contactName"
									value={formData.contactName}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.contactName && <p className="text-red-500 mt-1">{errors.contactName}</p>}

								<label className="block mt-4 mb-2 font-medium">
									Contact Email <span className="text-red-500">*</span>
								</label>
								<input
									type="email"
									name="contactEmail"
									value={formData.contactEmail}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.contactEmail && <p className="text-red-500 mt-1">{errors.contactEmail}</p>}

								<label className="block mt-4 mb-2 font-medium">
									Contact Phone <span className="text-red-500">*</span>
								</label>
								<input
									type="tel"
									name="contactPhone"
									value={formData.contactPhone}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 text-white"
								/>
								{errors.contactPhone && <p className="text-red-500 mt-1">{errors.contactPhone}</p>}
							</div>
						)}
						<div className="mt-6 flex justify-between">
							{step > 1 && (
								<button
									type="button"
									onClick={handleBack}
									className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
								>
									Back
								</button>
							)}
							{step < 3 && (
								<button
									type="button"
									onClick={handleNext}
									className="ml-auto px-4 py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition-colors"
								>
									Next
								</button>
							)}
							{step === 3 && (
								<button
									type="submit"
									className="ml-auto px-4 py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition-colors"
								>
									Confirm Booking
								</button>
							)}
							<button
								type="button"
								onClick={onClose}
								className="ml-4 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default BookingForm;
