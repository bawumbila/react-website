import React from "react";
import "./Products.css";

// Example destination data
const destinations = [
  {
    id: 1,
    name: "Mount Everest Base Camp",
    description:
      "A thrilling trek to the base of the world's highest mountain.",
    location: "Nepal",
    imageUrl: "../../../images/everest.jpg",
  },
  {
    id: 2,
    name: "Amazon Rainforest",
    description: "Explore the dense and biodiverse Amazon rainforest.",
    location: "Brazil",
    imageUrl: "../../../images/forest.jpg",
  },
  {
    id: 3,
    name: "Sahara Desert",
    description:
      "Experience the vastness of the Sahara on a guided desert tour.",
    location: "Morocco",
    imageUrl: "../../../images/img-8.jpg",
  },
  {
    id: 4,
    name: "Great Barrier Reef",
    description: "Dive into the world's largest coral reef system.",
    location: "Australia",
    imageUrl: "../../../images/reef.jpg",
  },
  {
    id: 5,
    name: "Antarctic Expedition",
    description: "Embark on a journey to the southernmost continent.",
    location: "Antarctica",
    imageUrl: "../../../images/antartic.jpg",
  },
  {
    id: 6,
    name: "Patagonia Trek",
    description: "Discover the stunning landscapes of Patagonia.",
    location: "Argentina/Chile",
    imageUrl: "../../../images/patagonia.jpeg",
  },
];

// DestinationCard Component
const DestinationCard = ({ destination }) => (
  <div className="destination-card">
    <img src={destination.imageUrl} alt={destination.name} />
    <div className="card-content">
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <p className="location">{destination.location}</p>
    </div>
  </div>
);

// AdventureDestinations Component
const Products = () => (
  <div className="adventure-destinations">
    <h2>Adventure Destinations</h2>
    <div className="destination-list">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  </div>
);

export default Products;
