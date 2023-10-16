import c from "classnames";

type ButtonProps = {
  children: string;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  const combinedClassName = c(
    "py-[9px] px-[20px] text-[18px] shadow-custom text-[18px] rounded-[5px]",
    className
  );
  return <button className={combinedClassName}>{children}</button>;
};
