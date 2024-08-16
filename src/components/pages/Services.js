import React from "react";
import "./Services.css";

// Example services data
const services = [
  {
    id: 1,
    name: "Guided Tours",
    description:
      "Experience breathtaking adventures with our expert guides who ensure safety and an unforgettable journey.",
    imageUrl: "../../../images/tour.jpg",
  },
  {
    id: 2,
    name: "Equipment Rentals",
    description:
      "Rent high-quality gear for all your adventure needs, from camping equipment to mountain bikes.",
    imageUrl: "../../../images/equipment.jpg",
  },
  {
    id: 3,
    name: "Travel Insurance",
    description:
      "Get comprehensive travel insurance to protect yourself during your adventures.",
    imageUrl: "../../../images/insurance.jpg",
  },
  {
    id: 4,
    name: "Customized Itineraries",
    description:
      "Create a personalized adventure itinerary tailored to your interests and preferences.",
    imageUrl: "../../../images/itenerary.jpeg",
  },
  {
    id: 5,
    name: "Group Discounts",
    description:
      "Enjoy special discounts and packages for group bookings and corporate adventures.",
    imageUrl: "../../../images/group.jpg",
  },
];

// ServiceCard Component
const ServiceCard = ({ service }) => (
  <div className="service-card">
    <img src={service.imageUrl} alt={service.name} />
    <div className="card-content">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  </div>
);

// AdventureServices Component
const Services = () => (
  <div className="adventure-services">
    <h2>Our Services</h2>
    <div className="service-list">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  </div>
);

export default Services;
