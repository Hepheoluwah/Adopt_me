//import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import AdoptedPetContext from "./AdoptedPet";
import fetchSearch from "./fetchSearch";
//import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [BREEDS] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);
  //const [adoptedPet, setAdoptedPet] = useContext(AdoptedPetContext);   //To read and write set

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="adopted-pet-display">
            <div className="adopted-pet-header">
              <h3>Your Adopted Pet</h3>
              <span className="adopted-badge">✓ Adopted</span>
            </div>
            <div className="pet image-container">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
            <p className="adopted-pet-name">{adoptedPet.name}</p>
          </div>
        ) : (
          <div className="search-header">
            <h3>Find Your Perfect Pet</h3>
            <p>Search for pets available for adoption in your area</p>
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="location">
            <span className="label-text">Location</span>
            <input
              name="location"
              id="location"
              placeholder="Enter your city or zip code"
              type="text"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="animal">
            <span className="label-text">Animal Type</span>
            <select
              name="animal"
              id="animal"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option value="">Select an animal</option>
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal.charAt(0).toUpperCase() + animal.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="breed">
            <span className="label-text">Breed</span>
            <select
              name="breed"
              id="breed"
              disabled={BREEDS.length === 0}
            >
              <option value="">Select a breed</option>
              {BREEDS.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="search-button">
          <span>Search Pets</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </form>

      <Results pets={pets} isLoading={results.isLoading} />
    </div>
  );
};

export default SearchParams;
