import { IChildProps } from "../types";

export const Layout = ({ children }: IChildProps) => {
  return (
    <>
      <header>
        <img src={require("../../assets/Harklogo.png")} className="logo" />
      </header>
      <main>{children}</main>
    </>
  );
};
