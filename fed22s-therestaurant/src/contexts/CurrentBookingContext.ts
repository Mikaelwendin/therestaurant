import { createContext } from "react";
import { IBooking, defaultBooking } from "../models/IBooking";

export const CurrentBookingContext = createContext<IBooking>(defaultBooking);
