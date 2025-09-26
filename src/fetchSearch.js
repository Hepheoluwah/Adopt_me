async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const apiUrl = "http://pets-v2.dev-apis.com";

  const res = await fetch(
    `${apiUrl}/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`pet search not okay ${animal}, ${location}, ${breed}`);
  }

  return res.json();
}

export default fetchSearch;

