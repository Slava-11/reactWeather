import { useState, useEffect } from "react";

function formatLocalTime(timestamp: number, timezoneOffset: number): string {
  const localTime = new Date((timestamp + timezoneOffset) * 1000);
  const hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
}
//@ts-expect-error abc
export function useLocalTime(dayWeather: AppProps | null) {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    if (dayWeather && dayWeather.dt && dayWeather.timezone) {
      const formattedTime = formatLocalTime(dayWeather.dt, dayWeather.timezone);
      setLocalTime(formattedTime);
    } else {
      setLocalTime("---");
    }
  }, [dayWeather]);

  return localTime || "---";
}
