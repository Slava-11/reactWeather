import logo from "../../img/logo.svg";
import colourTheme from "../../img/colourTheme.svg";
import { Button } from "../../components/Button";
import { useFunctional } from "./useFunctional";
import { useApiContext } from "../../context/AppContext";
export const Header = () => {
  const { handleClick, formSubmit, inputChange } = useFunctional();
  const { city } = useApiContext();
  return (
    <header className="px-[10px] pt-[15px] forDesktop:flex items-center justify-between w-[100%] max-w-[1200px] mx-auto pt-[20px]">
      <div className="flex items-center">
        <img src={logo} alt="no logo" />
        <h1 className="text-[25px] uppercase font-montserrat font-[700] text-mainColor ml-[20px]">
          React weather
        </h1>
        <img
          className="ml-auto cursor-pointer forDesktop:hidden"
          src={colourTheme}
          onClick={handleClick}
          alt="no colourTheme"
        />
      </div>
      <form
        className="mt-[20px] forDesktop:flex items-center mt-[0px] gap-x-[20px]"
        onSubmit={formSubmit}
      >
        <img
          className="mobile:hidden cursor-pointer forDesktop:block"
          src={colourTheme}
          onClick={handleClick}
          alt="no colourTheme"
        />
        <input
          className="bg-blueTransparent rounded-[10px] w-[100%] h-[50px] text-center text-[20px] font-montserrat dark:text-white mt-[20px] forDesktop:h-[40px] forDesktop:w-[160px] forDesktop:text-[14px] forDesktop:text-left forDesktop:pl-[10px] forDesktop:mt-[0px]"
          type="text"
          placeholder="Введіть ваше місто"
          value={city}
          onChange={inputChange}
        />
        <Button className="text-[20px] w-[100%] py-[15px] rounded-[10px] mt-[15px] font-montserrat dark:text-white dark:bg-secondBgColor forDesktop:mt-[0px] text-[18px]">
          Пошук
        </Button>
      </form>
    </header>
  );
};
