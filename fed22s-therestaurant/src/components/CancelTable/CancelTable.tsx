import { ChangeEvent, FormEvent, useState } from "react";
import { Confirmation } from "../Confirmation/Confirmation";
import { deleteBookingById } from "../../services/BookingService";

export const CancelTable = () => {

    const [bookingId, setBookingId] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [bookingCanceled, setBookingCanceled] = useState(false);
    


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setBookingId(e.target.value)    //Input för bokningsnummer.
    }
    const handleSubmit = (e:FormEvent) => {

        e.preventDefault();
        deleteBookingById(bookingId)    //Delete av input nummer. behöver errorhandling kanske.
        setBookingId("");
        setIsShown(true)            //När vi är klara får vi confirmation av borttagen bokning i HTML nedan.

    }
    return  <>{!isShown && (
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
    <p>Din bokning: --HÄR SKA DET STÅ NÅGOT!--</p>
    <button onClick={() => setBookingCanceled(true)}>Ta bort bokning</button>
</div>)}
{bookingCanceled && (<div>
<Confirmation msg={"Ditt bord är nu avbokat"}></Confirmation>
</div>)}
</>

}