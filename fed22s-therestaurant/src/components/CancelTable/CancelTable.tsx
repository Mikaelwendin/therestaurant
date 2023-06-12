import { ChangeEvent, FormEvent, useState } from "react";
import { Confirmation } from "../Confirmation/Confirmation";
import { deleteBookingById, getBookingById } from "../../services/BookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { Link } from "react-router-dom";

export const CancelTable = () => {

    const [bookingId, setBookingId] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [bookingCanceled, setBookingCanceled] = useState(false);
    const [booking, setBooking] = useState<IBooking>(defaultBooking);

    const deleteBooking = () => {
        deleteBookingById(bookingId)
        setBookingCanceled(true)
        setBookingId("");
    }


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setBookingId(e.target.value)
    }
    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();
        setBooking(await getBookingById(bookingId))
        setIsShown(true)

    }
    return <>{!isShown && (
        <div className="cancelTable">
            <h1>Avboka bord</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookingId}
                    onChange={handleChange}
                    name="name"
                />
                <button>Sök</button>
            </form>
        </div>
    )}
        {isShown && !bookingCanceled && (<div>
            <h2>Din bokning:</h2>
            <ul>
                <li>Namn: {booking.customer.name}</li>
                <li>Datum: {booking.date}</li>
                <li>Tid: {booking.time}</li>
                <li>Antal gäster: {booking.numberOfGuests}</li>
                <li>Email: {booking.customer.email}</li>
            </ul>
            <button onClick={deleteBooking}>Ta bort bokning</button>

            <p><Link to="/">Gå tillbaka</Link></p>

        </div>)}
        {bookingCanceled && (<div>
            <Confirmation name={booking.customer.name} msg={"Ditt bord är nu avbokat"}></Confirmation>
        </div>)}
    </>
}