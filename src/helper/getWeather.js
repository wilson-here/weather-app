export const getWeather = (val) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${val}`;

  const header = { mode: "cors" };

  return fetch(apiUrl, header).then((response) => response.json());
};
