import { ChangeEvent, FormEvent, useState } from "react"
import Calendar from "react-calendar";
import { Booking, defaultBooking } from "../../models/booking";
export const BookTable = () => {


    //const [userInput, setUserInput] = useState("");
    const [dateState, setDateState] = useState(new Date());
    const [userInput, setUserInput] = useState<Booking>(defaultBooking)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

     }
     const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUserInput({...userInput, numberOfGuests: e.target.value});
     }

     console.log(dateState)
     console.log(userInput)
    return <>
        <div className="bookingBox">
        <form onSubmit={handleSubmit}>
            <Calendar value={dateState} onClickDay={setDateState} minDate={new Date()}></Calendar>
            <select name="numberOfPeople" value={userInput.numberOfGuests} onChange={handleChange}>
            <option value=""> Please select number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            </select>
            <button>Go</button>
        </form>
        </div>

    </>
}