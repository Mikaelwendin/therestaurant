import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Calendar from "react-calendar";
import { checkDate, checkTablesLeft, mockBookingData } from "../../functions/functions";
import { Confirmation } from "../Confirmation/Confirmation";
import { BookingSelect } from "../BookingSelect/BookingSelect";
import { BookingRadio } from "../BookingRadio/BookingRadio";
import { BookingInput } from "../BookingInput/BookingInput";
import { createNewBooking, getAllBookings } from "../../services/BookingService";
import { IBooking, defaultBooking } from "../../models/IBooking";
export const BookTable = () => {

  const [userInput, setUserInput] = useState<IBooking>(defaultBooking)
  const [errMsg, setErrMsg] = useState("");
  const [testBool, setTestBool] = useState(false); //ska ha nytt namn
  const [dateState, setDateState] = useState(new Date());
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const testfunc = async () => {
      const data: IBooking[] = await getAllBookings();
      if (data) {
        const test = checkDate(data, userInput.date, userInput.time);
        const tablesLeft = checkTablesLeft(test);

        if (tablesLeft === 0) {
          setTestBool(false);
          setUserInput(defaultBooking);
          setErrMsg("Det finns inga bord att boka den dagen!");
        }

        if (userInput.numberOfGuests > 6 && tablesLeft < 2) {
          setErrMsg("Vi har tyvärr bara ett bord ledigt, till max 6 gäster!");
          setUserInput(defaultBooking);
        } else {
          setTestBool(true);
        }
      }
    };

    if (userInput.date) {
      testfunc();
    }
  }, [userInput]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUserInput({ ...userInput, date: dateState.toLocaleDateString() });
    if (testBool) createNewBooking(userInput)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;

    if (type === "text") {
      setUserInput({ ...userInput, customer: { ...userInput.customer, [name]: value } });
    } else if (type === "radio") {
      setUserInput({ ...userInput, time: value });
    } else if (type === "select-one") {
      setUserInput({ ...userInput, numberOfGuests: parseInt(value) });
    }
  };

  return <>
    {!testBool && (<div className="bookingBox">
      <form onSubmit={handleSubmit}>
        <Calendar value={dateState} onClickDay={setDateState} minDate={new Date()} ></Calendar>
        <BookingSelect userInput={userInput} handleChange={handleChange} />
        <BookingRadio handleChange={handleChange} />
        <button disabled={!userInput.time || !userInput.date && userInput.numberOfGuests < 1}>Go</button>
      </form>
      <h2>{errMsg}</h2>
    </div>)}

    {testBool && !isDone && (
      <form onSubmit={handleSubmit}>
        <BookingInput userInput={userInput} handleChange={handleChange}></BookingInput>
      </form>
    )}
    {isDone && <Confirmation name={userInput.customer.name} msg={"Ditt bord är nu bokat"}></Confirmation>}

  </>
}