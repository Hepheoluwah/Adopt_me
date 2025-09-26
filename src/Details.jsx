import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPet";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPets";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  //results.refresh

  if (results.isLoading) {
    return (
      <div className="details">
        <div className="loading-skeleton">
          <div className="skeleton-header">
            <div className="skeleton-title"></div>
            <div className="skeleton-badges">
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
              <div className="skeleton-badge"></div>
            </div>
          </div>
          <div className="skeleton-content">
            <div className="skeleton-carousel">
              <div className="skeleton-image"></div>
            </div>
            <div className="skeleton-info">
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div className="details-header">
        <h1>{pet.name}</h1>
        <div className="pet-meta">
          <span className="pet-type-badge">{pet.animal}</span>
          <span className="pet-breed-badge">{pet.breed}</span>
          <span className="pet-location-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {pet.city}, {pet.state}
          </span>
        </div>
      </div>

      <div className="details-content">
        <div className="carousel-section">
          <Carousel images={pet.images} />
        </div>
        
        <div className="pet-info-section">
          <div className="pet-description">
            <h3>About {pet.name}</h3>
            <p>{pet.description}</p>
          </div>
          
          <div className="adoption-section">
            <div className="adoption-info">
              <h3>Ready to Adopt?</h3>
              <p>Give {pet.name} a loving forever home!</p>
            </div>
            <button 
              className="adopt-button"
              onClick={() => setShowModal(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Adopt {pet.name}
            </button>
          </div>
        </div>
      </div>

      {showModal ? (
        <Modal onClose={() => setShowModal(false)}>
          <div className="adoption-modal">
            <div className="modal-header">
              <h2>Adopt {pet.name}?</h2>
              <p>Are you ready to give this {pet.animal} a loving forever home?</p>
            </div>
            <div className="modal-actions">
              <button
                className="confirm-adopt"
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Yes, Adopt {pet.name}!
              </button>
              <button 
                className="cancel-adopt"
                onClick={() => setShowModal(false)}
              >
                Not Yet
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;