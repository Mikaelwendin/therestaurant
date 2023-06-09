import { IBooking } from "../../models/IBooking";
import { StyledTd } from "../Styled/StyledTd";
import { StyledTr } from "../Styled/StyledTr";

interface IBookingViewProps {
  booking: IBooking;
}

export const BookingView = ({ booking }: IBookingViewProps) => {
  return (
    <StyledTr>
      <StyledTd>{booking.date}</StyledTd>
      <StyledTd>{booking.time}</StyledTd>
      <StyledTd>{booking.numberOfGuests}</StyledTd>
      <StyledTd>{booking.customer.name}</StyledTd>
      <StyledTd>{booking.customer.email}</StyledTd>
      <StyledTd>{booking.customer.phone}</StyledTd>
      <StyledTd>
        <button>Ändra</button>
      </StyledTd>
      <StyledTd>
        <button>Avboka</button>
      </StyledTd>
    </StyledTr>
  );
};
