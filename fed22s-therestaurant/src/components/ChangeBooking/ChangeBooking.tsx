import { ChangeEvent, FormEvent, useState, useContext, useEffect } from "react";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { CurrentBookingContext } from "../../contexts/CurrentBookingContext";
import { updateBookingById } from "../../services/BookingService";

export const ChangeBooking = () => {
  const currentBooking = useContext(CurrentBookingContext);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userInput._id) updateBookingById(userInput._id, userInput);
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
