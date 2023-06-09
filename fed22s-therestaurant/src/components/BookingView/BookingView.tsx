import { IBooking } from "../../models/IBooking";

interface IBookingViewProps {
  booking: IBooking;
}

export const BookingView = ({ booking }: IBookingViewProps) => {
  return (
    <div>
      <h3>{booking.date}</h3>
      <h2>{booking.time}</h2>
      <p>{booking.numberOfGuests}</p>
      <p>{booking.customer.name}</p>
    </div>
  );
};
