export const getWeather = async (city: string) => {
  const apiKey = "f10995dc8ae734747abd9487c9401eac";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  return response.json();
};
