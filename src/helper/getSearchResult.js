export const getSearchResult = async (val) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${val}`;

  const header = { mode: "cors" };

  const res = await fetch(apiUrl, header);
  return res.json();
};
