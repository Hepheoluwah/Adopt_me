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
    <div className="search-paraams">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          //requestPets();
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            //onChange={(e) => setLocation(e.target.value)}
            name="location"
            id="location"
            //value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            //value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              //setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            //onChange={(e) => setBreed(e.target.value)}
            name="breed"
            id="breed"
            disabled={BREEDS.length === 0}
            //value={breed}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>

      {/* {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))} */}

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
