
import { useState, useEffect } from "react";
import { BookTable } from "../components/BookTable/BookTable";
import { CancelTable } from "../components/CancelTable/CancelTable";
import axios from "axios";


export const Bookingpage = () => {

    const [isBooking, setIsShown] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    const [bookingSucess, setSucessBooking] = useState({
        guest: 0,
        seating: "",
        mobile: "",

    });

    const bookingUrl = "http://localhost:4000";

    const avaliableSeat = async () => {
        try {
            const res = await axios.get(bookingUrl + "/avaliableSeat"), {
                params: {
                    guest: bookingSucess.guest,
                    seating: bookingSucess.seating,
                },
            };
        } catch (error) {
            console.log(error);
        }
    };


    return <>
        {!isBooking && !isCancel && (
            <button onClick={() => setIsShown(true)}>Boka bord</button>)}
        {isBooking && (<BookTable></BookTable>)}
        {!isCancel && !isBooking && (
            <button onClick={() => setIsCancel(true)}>Avboka bord</button>)}
        {isCancel && (<CancelTable></CancelTable>)}




    </>;



}