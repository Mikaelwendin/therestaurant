import { Customer } from "./customer";

export class Booking {
    constructor(
        public date: string,
        public time: string,
        public numberOfGuests: string,
        public customer: Customer
    )
    {}
}