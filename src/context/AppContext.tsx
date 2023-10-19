import React, { createContext, useContext, useState, useEffect } from "react";
import { getWeather } from "../api/api";

type ApiContextType = {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  isCitySelected: boolean;
  setIsCitySelected: React.Dispatch<React.SetStateAction<boolean>>;
  dayWeather: any;
  setDayWeather: React.Dispatch<React.SetStateAction<any>>;
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
  const [dayWeather, setDayWeather] = useState<any>();

  useEffect(() => {
    if (isCitySelected) {
      getWeather(city)
        .then((data) => {
          setDayWeather(data);
        })
        .catch(() => {
          console.log("Помилка");
        });
    }
  }, [city, isCitySelected]);
  console.log(dayWeather);

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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};