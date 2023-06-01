import { useState } from "react";
import { BookTable } from "../components/BookTable/BookTable";

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
