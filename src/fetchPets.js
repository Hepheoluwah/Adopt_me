const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiUrl = "http://pets-v2.dev-apis.com";

  const apiRes = await fetch(`${apiUrl}/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchPet;
