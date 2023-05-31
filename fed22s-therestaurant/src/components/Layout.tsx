import { Outlet } from "react-router";
import { PageNavigation } from "./Navigation/PageNavigation";

export const Layout = () => {
  return (
    <>
      <header><PageNavigation></PageNavigation></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
