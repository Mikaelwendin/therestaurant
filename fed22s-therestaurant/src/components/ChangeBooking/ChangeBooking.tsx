import { ChangeEvent, FormEvent, useState, useContext, useEffect } from "react";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { CurrentBookingContext } from "../../contexts/CurrentBookingContext";
import {
  getAllBookings,
  updateBookingById,
} from "../../services/BookingService";
import { CurrentBookingDispatchContext } from "../../contexts/CurrentBookingDispatchContext";
import { BookingDispatchContext } from "../../contexts/BookingDispatchContext";

export const ChangeBooking = () => {
  const currentBooking = useContext(CurrentBookingContext);
  const dispatchCurrentBooking = useContext(CurrentBookingDispatchContext);
  const dispatchBookings = useContext(BookingDispatchContext);

  const [userInput, setUserInput] = useState<IBooking>(currentBooking.booking);

  useEffect(() => {
    setUserInput(currentBooking.booking);
  }, [currentBooking]);

  console.log("userInput is now: " + JSON.stringify(userInput));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const eName = e.target.name;

    if (e.target.type === "text") {
      setUserInput({
        ...userInput,
        customer: { ...userInput.customer, [eName]: e.target.value },
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("handleSubmit has been run");

    if (userInput._id) await updateBookingById(userInput._id, userInput);

    dispatchCurrentBooking({
      type: "toggled",
      payload: JSON.stringify(currentBooking),
    });
    const bookingsFromApi = await getAllBookings();

    dispatchBookings({
      type: "gotbookings",
      payload: JSON.stringify(bookingsFromApi),
    });
    console.log("Test");
  };

  return (
    <>
      Ändra bokningen för bokningsnummer: {userInput._id}.
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput.date}
          onChange={handleChange}
          name="date"
        />
        <input
          type="text"
          value={userInput.time}
          onChange={handleChange}
          name="time"
        />
        <input
          type="text"
          value={userInput.numberOfGuests}
          onChange={handleChange}
          name="numberOfGuests"
        />
        <input
          type="text"
          value={userInput.customer.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          value={userInput.customer.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          value={userInput.customer.phone}
          onChange={handleChange}
          name="phone"
        />
        <button type="submit">Spara</button>
      </form>
    </>
  );
};
