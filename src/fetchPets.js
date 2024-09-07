const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiUrl = import.meta.env.VITE_PET_API_URL; // Access the API URL from environment variables

  const apiRes = await fetch(`${apiUrl}/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
