const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiUrl = import.meta.env.VITE_PET_API_URL; // Access the API URL from environment variables

  const apiRes = await fetch(`${apiUrl}/breeds?animal=${animal}`);

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
