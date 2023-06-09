import { useEffect, useState } from "react";
import { getAllBookings } from "../../services/BookingService";
import { IBooking } from "../../models/IBooking";
import { BookingView } from "../BookingView/BookingView";
import { StyledTable } from "../Styled/StyledTable";
import { StyledTr } from "../Styled/StyledTr";
import { StyledTh } from "../Styled/StyledTh";

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

  return (
    <StyledTable>
      <StyledTr>
        <StyledTh>Datum</StyledTh>
        <StyledTh>Tid</StyledTh>
        <StyledTh>Antal</StyledTh>
        <StyledTh>Namn</StyledTh>
        <StyledTh>E-post</StyledTh>
        <StyledTh>Telefon</StyledTh>
      </StyledTr>
      {html}
    </StyledTable>
  );
};
