import { ICurrentBookingContext } from "../contexts/CurrentBookingContext";
import { IBooking } from "../models/IBooking";
import { IAction } from "./BookingsReducer";

export const CurrentBookingReducer = (
  currentBooking: ICurrentBookingContext,
  action: IAction
): ICurrentBookingContext => {
  switch (action.type) {
    case "gotbooking": {
      console.log(
        "Case gotbooking har been run and is returning" + action.payload
      );

      return JSON.parse(action.payload);
    }
    //default: (felhantering)
  }

  return currentBooking;
};
