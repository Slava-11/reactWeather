import { useApiContext } from "../../context/AppContext";

export const useColorTheme = () => {
  const { isLight, setIsLight } = useApiContext();
  const handleClick = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("dark");
  };
  return handleClick;
};
