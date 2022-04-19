const fetchPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default fetchPlanets;
