import { Customer } from "./customer";

export interface IBooking {
  date: string;
  time: string;
  numberOfGuests: number;
  customer: Customer;
}
