import { useApiContext } from "../../context/AppContext";

export const useInputChange = () => {
  const { setCity, setIsCitySelected } = useApiContext();
  const inputChange = (e) => {
    setCity(e.target.value);
    setIsCitySelected(false);
  };
  return inputChange;
};
