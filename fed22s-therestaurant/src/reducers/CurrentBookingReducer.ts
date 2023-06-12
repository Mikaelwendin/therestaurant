import { IBooking } from "../models/IBooking";
import { IAction } from "./BookingsReducer";

export const CurrentBookingReducer = (
  booking: IBooking,
  action: IAction
): IBooking => {
  switch (action.type) {
    case "gotbooking": {
      return JSON.parse(action.payload);
    }
    //default: (felhantering)
  }

  return booking;
};
