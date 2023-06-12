import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { IBooking, defaultBooking } from "../../models/IBooking";
import { CurrentBookingContext } from "../../contexts/CurrentBookingContext";

export const ChangeBooking = () => {
  const currentBooking = useContext(CurrentBookingContext);

  const [userInput, setUserInput] = useState<IBooking>(currentBooking);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {};

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    return;
  };
  return (
    <>
      Ändra bokningen för {currentBooking._id}
      <form onSubmit={handleSubmit}></form>
    </>
  );
};
