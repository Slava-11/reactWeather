import { useApiContext } from "../../context/AppContext";

export const useFunctional = () => {
  const {
    isLight,
    setIsLight,
    city,
    setIsCitySelected,
    setCity,
  } = useApiContext();
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setIsCitySelected(false);
  };
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city !== "") {
      setIsCitySelected(true);
    }
  };
  const handleClick = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("dark");
  };
  return { handleClick, formSubmit, inputChange };
};
