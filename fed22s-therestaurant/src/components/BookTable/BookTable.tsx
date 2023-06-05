import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Calendar from "react-calendar";
import { Booking, defaultBooking } from "../../models/booking";
import { checkDate, checkTablesLeft, mockBookingData } from "../../functions/functions";
import { Confirmation } from "../Confirmation/Confirmation";
export const BookTable = () => {

    const [errMsg, setErrMsg] = useState("");
    const [testBool, setTestBool] = useState(false); //ska ha nytt namn
    const [dateState, setDateState] = useState(new Date());
    const [userInput, setUserInput] = useState<Booking>(defaultBooking)
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        const testfunc = () => { //ska ha nytt namn
        const test = checkDate(mockBookingData, userInput.date, userInput.time)
        const tablesLeft = checkTablesLeft(test)
        if (tablesLeft === 0) {
            setTestBool(false)
            setUserInput(defaultBooking)
            setErrMsg("Det finns inga bord att boka den dagen!");
        }
        if (userInput.numberOfGuests > 6 && tablesLeft < 2) {
            setErrMsg("Vi har tyvärr bara ett bord ledigt, till max 6 gäster!");
            setUserInput(defaultBooking)
        }
        else setTestBool(true);
        }
        if (userInput.date) {
            testfunc()
        }
    }, [userInput])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setUserInput({ ...userInput, date: dateState.toLocaleDateString()}); 
        setIsDone(true);  //IF success
    }
    console.log(testBool)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const value = e.target.name;

        if (e.target.type === "text") {
            setUserInput({ ...userInput, customer: { ...userInput.customer, [value]: e.target.value } })
        }
        if (e.target.type === "radio") {
            setUserInput({ ...userInput, time: e.target.value })
        }
    }
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {

        setUserInput({ ...userInput, numberOfGuests: parseInt(e.target.value) });

    }
    console.log(userInput);

    return <>
        {!testBool && (<div className="bookingBox">
            <form onSubmit={handleSubmit}>
                <Calendar value={dateState} onClickDay={setDateState} minDate={new Date()} ></Calendar>
                <select name="numberOfPeople" value={userInput.numberOfGuests} onChange={handleSelect}>
                    <option value=""> Please select number of guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <label htmlFor="early">18:00</label>
                <input
                    type="radio"
                    value="18:00"
                    onChange={handleChange}
                    name="time"
                    id="early"

                />
                <label htmlFor="late">21:00</label>
                <input
                    type="radio"
                    value="21:00"
                    onChange={handleChange}
                    name="time"
                    id="late"

                />
                <button disabled={!userInput.time || !userInput.date && userInput.numberOfGuests < 1}>Go</button>
            </form>
            <h2>{errMsg}</h2>
        </div>)}

        {testBool && !isDone && (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput.customer.name}
                    onChange={handleChange}
                    name="name"
                />
                <input
                    type="text"
                    value={userInput.customer.phone}
                    onChange={handleChange}
                    name="phone"
                />
                <input
                    type="text"
                    value={userInput.customer.email}
                    onChange={handleChange}
                    name="email"
                />
                <button>Spara</button>
            </form>
        )}
        {isDone && <Confirmation msg={"Ditt bord är nu bokat"}></Confirmation>}

    </>
}