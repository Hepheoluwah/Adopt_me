import Pet from "./Pet";

const PetSkeleton = () => (
  <div className="pet-skeleton">
    <div className="skeleton-pet-image"></div>
    <div className="skeleton-pet-info">
      <div className="skeleton-pet-header">
        <div className="skeleton-pet-name"></div>
        <div className="skeleton-pet-type"></div>
      </div>
      <div className="skeleton-pet-details">
        <div className="skeleton-pet-breed"></div>
        <div className="skeleton-pet-location"></div>
      </div>
    </div>
  </div>
);

const Results = ({ pets, isLoading }) => {
  if (isLoading) {
    return (
      <div className="search-results">
        <div className="results-header">
          <h2>Available Pets</h2>
          <div className="skeleton-count"></div>
        </div>
        <div className="pets-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <PetSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      {!pets.length ? (
        <div className="no-pets-found">
          <div className="no-pets-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"></path>
              <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"></path>
            </svg>
          </div>
          <h2>No Pets Found</h2>
          <p>Try adjusting your search criteria to find more pets available for adoption.</p>
        </div>
      ) : (
        <>
          <div className="results-header">
            <h2>Available Pets</h2>
            <span className="results-count">{pets.length} pet{pets.length !== 1 ? 's' : ''} found</span>
          </div>
          <div className="pets-grid">
            {pets.map((pet) => (
              <Pet
                animal={pet.animal}
                id={pet.id}
                name={pet.name}
                breed={pet.breed}
                images={pet.images}
                location={`${pet.city}, ${pet.state}`}
                key={pet.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
