import { useApiContext } from "../../context/AppContext";
import weather from '../../img/weather.png'

export const useWeatherHelpers = () => {
    const { dayWeather } = useApiContext();
  const temp = `${Math.round(dayWeather?.main?.temp - 273.15) || "0"}°`;
  const textTemp = `${
    Math.round(dayWeather?.main?.temp - 273.15) || "0"
  }° - відчувається як ${
    Math.round(dayWeather?.main?.feels_like - 273.15) || "0"
  }°`;
  const weatherIcon = dayWeather?.weather?.[0]?.icon;
//   const weatherImg = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  const weatherImg = (weatherIcon) ? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` : weather;
  const textHumidity = `${
    Math.round(dayWeather?.main?.pressure * 0.75006375541921) || "0"
  } ртутного стовпчика`;
  const textEvaporator = `${
    dayWeather?.weather?.[0]?.description || "0"
  } вологість: ${dayWeather?.main?.humidity || "0"}%`;
  const textWind = `швидкість вітру: ${
    dayWeather?.wind?.speed || "0"
  } м/с;  напрямок вітра: ${dayWeather?.wind?.deg || "0"}°`;
  return {temp, textTemp, weatherImg, textHumidity, textEvaporator, textWind}
}
