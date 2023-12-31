import { ThisDayInfo } from "../../components/ThisDayInfo";
import cloud from "../../img/cloud.png";
import thermometer from "../../img/thermometer.svg";
import humidity from "../../img/humidity.svg";
import evaporator from "../../img/evaporator.svg";
import wind from "../../img/wind.svg";
import { useApiContext } from "../../context/AppContext";
import { useLocalTime } from "./useLocalTime";
import { useWeatherHelpers } from "./useWeatherHelpers";
export const ThisDay = () => {
  const { dayWeather } = useApiContext();
  const { temp, textTemp, weatherImg, textHumidity, textEvaporator, textWind } =
    useWeatherHelpers();

  const localTime = useLocalTime(dayWeather);
  return (
    <section className="mt-[50px] px-[10px] flex flex-wrap items-center gap-[50px] forDesktop:justify-center">
      {dayWeather?.message ? (
        <p className="absolute top-0 left-0 right-0 w-[350px] font-montserrat font-medium text-center mx-auto p-[10px] bg-redColor text-white rounded-br-lg rounded-bl-lg">
          Введіть місто коректно
        </p>
      ) : null}
      <div className="w-[100%] max-w-[400px] shadow-custom rounded-[20px] p-[20px] dark:bg-secondBgColor">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[96px] font-montserrat text-mainColor font-[500]">
              {temp}
            </h2>
            <p className="text-[40px] font-montserrat font-[400] mt-[10px] dark:text-white">
              Сьогодні
            </p>
          </div>
          <img
            className="w-[120px] h-[120px] "
            src={weatherImg}
            alt="no weather icon"
          />
        </div>
        <h3 className="text-[25px] font-montserrat text-mainTextColor font-[400] mt-[30px]">
          Час: {localTime}
        </h3>
        <h3 className="text-[25px] font-montserrat text-mainTextColor font-[400] mt-[15px]">
          Місто: {dayWeather?.message || dayWeather?.name || "Загрузка..."}
        </h3>
      </div>
      <div className="w-[100%] max-w-[750px] p-[20px] shadow-custom rounded-[20px] relative truncate dark:bg-secondBgColor forDesktop:py-[27px] forDesktop:pl-[32px] forDesktop:max-w-[550px] forDesktopHD:max-w-[750px]">
        <ThisDayInfo title="Температура" text={textTemp} src={thermometer} />
        <ThisDayInfo
          className="mt-[25px]"
          title="Тиск"
          text={textHumidity}
          src={humidity}
        />
        <ThisDayInfo
          className="mt-[25px]"
          title="Опади"
          text={textEvaporator}
          src={evaporator}
        />
        <ThisDayInfo
          className="mt-[25px]"
          title="Вітер"
          text={textWind}
          src={wind}
        />
        <img
          className="mobile:hidden forDesktop:block absolute top-0 right-0"
          src={cloud}
          alt="no cloud"
        />
      </div>
    </section>
  );
};
