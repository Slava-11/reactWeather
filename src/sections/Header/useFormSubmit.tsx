import { useApiContext } from "../../context/AppContext";

export const useFormSubmit = () => {
  const { city, setIsCitySelected } = useApiContext();
  const formSubmit = (e) => {
    e.preventDefault();
    if (city !== "") {
      setIsCitySelected(true);
    }
  };
  return formSubmit;
};
