import { Customer, defaultCustomer } from "./customer";

export class Booking {
    constructor(
        public date: string,
        public time: string,
        public numberOfGuests: string,
        public customer: Customer
    )
    {}
}
export let defaultBooking = new Booking("", "", "", defaultCustomer);