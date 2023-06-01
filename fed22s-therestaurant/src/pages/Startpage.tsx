import { useEffect, useState } from "react";
import { BookTable } from "../components/BookTable/BookTable";

export const Startpage = () => {

  const [isShown, setIsShown] = useState(() => {
    return (localStorage.getItem("checkbox") || "false") === "false";
  });

  useEffect(() => {
    localStorage.setItem("checkbox", String(isShown));
  } [isShown]);

  const handleClick = () => {
    setIsShown(true)

  }
  return <>
    {!isShown && (
      <button onClick={handleClick}>Boka Bord</button>)}
    {isShown && (<BookTable></BookTable>)}
  </>;

};


export const Bookingpage = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(true)

  }
  return <>
    {!isShown && (
      <button onClick={handleClick}>Boka Bord</button>)}
    {isShown && (<BookTable></BookTable>)}
  </>;

}


//varför kallar den inte tillbaka till HOME efter att man har klickat på boka?

//export const Startpage = () => {
//  return <>Startpage is working</>;
//};
