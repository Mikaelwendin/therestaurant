import { useEffect, useState } from "react";
import { getAllBookings } from "../../services/BookingService";
import { IBooking } from "../../models/IBooking";
import { BookingView } from "../BookingView/BookingView";

export const BookingList = () => {
  //Temporary state
  const [bookings, setBookings] = useState<IBooking[]>([]);

  // Temporary useEffect for testing
  useEffect(() => {
    const testFunc = async () => {
      const data = await getAllBookings();
      setBookings(data);
    };

    testFunc();
  }, []);

  const html = bookings.map((booking) => (
    <BookingView booking={booking}></BookingView>
  ));

  return <div>{html}</div>;
};
