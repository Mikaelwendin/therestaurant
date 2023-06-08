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


   //States. Kan förmodligen effektiviseras en hel del.
  const [userInput, setUserInput] = useState<IBooking>(defaultBooking)
  const [errMsg, setErrMsg] = useState("");
  const [testBool, setTestBool] = useState(false); //ska ha nytt namn
  const [dateState, setDateState] = useState(new Date());
  const [isDone, setIsDone] = useState(false);
  const [testId, setTestId] = useState<IBooking>(defaultBooking);

  //useEffect. duh.
  useEffect(() => {
    const testfunc = async () => {
      const data: IBooking[] = await getAllBookings();  //Spara bokningar i en array
      if (data) { //OM variabel inte är null/undefined
        const test = checkDate(data, userInput.date, userInput.time);   //Kontrollera array mot användarens valda datum och tid. Ger tillbaka en lista
        const tablesLeft = checkTablesLeft(test); //Kontrollera om det finns bord kvar på den filtrerade listan

        if (tablesLeft === 0) {       //OM inte, åtyterställ userinput och ge felmeddelande
          setTestBool(false);
          setUserInput(defaultBooking);
          setErrMsg("Det finns inga bord att boka den dagen!");
        }

        if (userInput.numberOfGuests > 6 && tablesLeft < 2) {     //OM det bara finns ett bord kvar och användaren är fler än 6, ge felmeddelande
          setErrMsg("Vi har tyvärr bara ett bord ledigt, till max 6 gäster!");
          setUserInput(defaultBooking);
        } else {      //ANNARS, set boolean till true för atta os oss vidare till nästa input.
          setTestBool(true);
        }
      }
    };

    if (userInput.date) {   //Funktionen körs när användaren valt ett datum.
      testfunc();
    }
  }, [userInput]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUserInput({ ...userInput, date: dateState.toLocaleDateString() });   //sätt datum på bookningen
    if (testBool) {
      setTestId(await createNewBooking(userInput))      //OM alla fälten är ifyllda, posta bokningen
      setIsDone(true)     //isDone kör confirmation-componenten.

    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {      //Handle change för alla inputs
    const { name, type, value } = e.target;

    if (type === "text") {
      setUserInput({ ...userInput, customer: { ...userInput.customer, [name]: value } });
    } else if (type === "radio") {
      setUserInput({ ...userInput, time: value });
    } else if (type === "select-one") {
      setUserInput({ ...userInput, numberOfGuests: parseInt(value) });
    }
  };
  //HTML beroende på vad vi submittat.
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
    {isDone && testBool && <Confirmation name={testId.customer.name} msg={`Ditt bord är nu bokat med bokningsnummer: ${testId._id}`}></Confirmation>}

  </>
}