import { Booking } from "../models/booking";

export const checkDate = (list:Booking[], date:string) => {
 const filtered = list.filter(dates => {
    return dates.date === date;
  })
return filtered;
}

export const checkTablesLeft = (list: Booking[]) => {
  const tableCapacity = 6;
  let numberOfTables = 15;
  
  for (let i = 0; i < list.length; i++) {
    const guestsInBooking = list[i].numberOfGuests;
    const tablesNeeded = Math.ceil(guestsInBooking / tableCapacity);
    
    numberOfTables -= tablesNeeded;
  }
  
  return numberOfTables >= 0 ? numberOfTables : 0;
}

export const mockBookingData:Booking[] = [
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 5,
      customer: {
        name: "name1",
        email: "mail1",
        phone: "phone1",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name2",
        email: "mail2",
        phone: "phone2",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 5,
      customer: {
        name: "name3",
        email: "mail3",
        phone: "phone3",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 20,
      customer: {
        name: "name4",
        email: "mail4",
        phone: "phone4",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name5",
        email: "mail5",
        phone: "phone5",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name5",
        email: "mail5",
        phone: "phone5",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name6",
        email: "mail6",
        phone: "phone6",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 15,
      customer: {
        name: "name7",
        email: "mail7",
        phone: "phone7",
      },
    },
    {
      date: "Thu Jun 15 2023",
      time: "test-time",
      numberOfGuests: 3,
      customer: {
        name: "name8",
        email: "mail8",
        phone: "phone8",
      },
    },
    {
      date: "Thu Jun 16 2023",
      time: "test-time",
      numberOfGuests: 3,
      customer: {
        name: "name9",
        email: "mail9",
        phone: "phone9",
      },
    },
    {
      date: "Thu Jun 16 2023",
      time: "test-time",
      numberOfGuests: 10,
      customer: {
        name: "name10",
        email: "mail10",
        phone: "phone10",
      },
    },
    {
      date: "Thu Jun 16 2023",
      time: "test-time",
      numberOfGuests: 6,
      customer: {
        name: "name11",
        email: "mail11",
        phone: "phone11",
      },
    },
  ];
  