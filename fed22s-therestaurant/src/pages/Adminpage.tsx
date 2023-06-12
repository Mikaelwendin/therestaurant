import { useEffect, useReducer } from "react";
import { BookingList } from "../components/BookingList/BookingList";
import { BookingsReducer } from "../reducers/BookingsReducer";
import { BookingsContext } from "../contexts/BookingsContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { getAllBookings } from "../services/BookingService";

export const Adminpage = () => {
  const [bookings, dispatch] = useReducer(BookingsReducer, []);

  useEffect(() => {
    if (bookings.length > 0) return;

    const getData = async () => {
      const bookingsFromApi = await getAllBookings();

      dispatch({
        type: "gotbookings",
        payload: JSON.stringify(bookingsFromApi),
      });
    };

    if (bookings.length === 0) {
      getData();
    }
  });

  return (
    <BookingsContext.Provider value={bookings}>
      <BookingDispatchContext.Provider value={dispatch}>
        Adminpage is working
        <BookingList></BookingList>
      </BookingDispatchContext.Provider>
    </BookingsContext.Provider>
  );
};
