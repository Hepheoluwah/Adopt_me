const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiUrl = "http://pets-v2.dev-apis.com";

  const apiRes = await fetch(`${apiUrl}/breeds?animal=${animal}`);

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
