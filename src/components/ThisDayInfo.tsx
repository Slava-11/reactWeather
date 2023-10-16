import c from "classnames";

type ThisDayInfoProps = {
  src: string;
  title: string;
  text: string;
  className?: string;
};

export const ThisDayInfo = ({
  src,
  title,
  text,
  className,
}: ThisDayInfoProps) => {
  const combinedClassName = c(
    "flex flex-col items-center justify-center forDesktop:flex-row forDesktop:justify-start forDesktop:relative forDesktop:z-10",
    className
  );
  return (
    <div className={combinedClassName}>
      <div className="flex items-center justify-center w-[38px] h-[38px] bg-white rounded-[50%]">
        <img src={src} alt="no icon" />
      </div>

      <h3 className="text-[14px] font-montserrat font-[400] text-mainTextColor mt-[15px] forDesktop:ml-[20px] forDesktop:mt-[0px]">
        {title}:{" "}
        <span className="text-black dark:text-white ml-[20px]">{text}</span>
      </h3>
    </div>
  );
};
