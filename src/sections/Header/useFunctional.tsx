import { useApiContext } from "../../context/AppContext";

export const useFunctional = () => {
  const { isLight, setIsLight, city, setIsCitySelected, setCity } =
    useApiContext();
  const inputChange = (e) => {
    setCity(e.target.value);
    setIsCitySelected(false);
  };
  const formSubmit = (e) => {
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
