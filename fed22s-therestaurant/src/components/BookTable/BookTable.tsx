import { FormEvent } from "react"
import Calendar from "react-calendar";

export const BookTable = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

     }



    return <>
        <div className="bookingBox">
        <form onSubmit={handleSubmit}>
            <Calendar></Calendar>
            <select name="numberOfPeople">
            <option value=""> Please select number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            </select>
        </form>
        </div>

    </>
}