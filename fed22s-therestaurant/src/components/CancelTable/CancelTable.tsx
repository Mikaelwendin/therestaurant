import { ChangeEvent, FormEvent, useState } from "react";

export const CancelTable = () => {

    const [bookingId, setBookingId] = useState("");
    const [isShown, setIsShown] = useState(false);
    


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setBookingId(e.target.value)
    }
    const handleSubmit = (e:FormEvent) => {

        e.preventDefault();
        //API CALL för att deleta bokning
        setBookingId("");
        setIsShown(true)

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
{isShown && (<div>
    <p>Din bokning: HÄR SKA DET STÅ NÅGOT</p>
    <button>Ta bort bokning</button>
</div>)}</>

}