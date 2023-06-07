import { ChangeEvent } from "react";
import { Booking } from "../../models/booking";

interface IBookingInputProps {
  userInput: Booking;
  handleChange(e: ChangeEvent<HTMLInputElement>): void;
}

export const BookingInput = ({ userInput, handleChange }: IBookingInputProps) => {
  return (
    <>
      <input
        type="text"
        value={userInput.customer.name}
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        value={userInput.customer.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Phone"
      />
      <input
        type="text"
        value={userInput.customer.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <button>Spara</button>
    </>
  );
};
