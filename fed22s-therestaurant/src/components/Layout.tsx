import { Outlet } from "react-router";
import { PageNavigation } from "./Navigation/PageNavigation";
import "./layout.scss";

export const Layout = () => {
  return (
    <>
      <header><PageNavigation></PageNavigation></header>
      <main>
        <Outlet></Outlet>
      </main>
      {/*       <footer><p className="footer-information">Insta, Facebook, Adress</p></footer> */}
    </>
  );
};
