import React, { createContext, useContext, useState, useEffect } from "react";
import { getWeather } from "../api/api";
///Тут изменить название на AppContext
type ApiContextType = {
  isLight: boolean;
  setIsLight: boolean;
  city: string;
  setCity: string;
  isCitySelected: boolean;
  setIsCitySelected: boolean;
  dayWeather: any;
  setDayWeather: any;
  error: string | null;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [city, setCity] = useState("");
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [dayWeather, setDayWeather] = useState();
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    if (isCitySelected) {
      getWeather(city)
        .then((data) => {
          setDayWeather(data);
        })
        .catch((error) => {
          console.log("Помилка");
        });
    }
  }, [city, isCitySelected]);
  console.log(dayWeather)

  return (
    <ApiContext.Provider
      value={{
        isLight,
        setIsLight,
        city,
        setCity,
        isCitySelected,
        setIsCitySelected,
        dayWeather,
        setDayWeather,
        error,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
