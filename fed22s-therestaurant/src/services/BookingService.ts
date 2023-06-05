import { IBooking } from "../models/IBooking";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/bookings";

const get = async <T>(endpoint: string) => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};

export const getAllBookings = async (): Promise<IBooking[]> => {
  return await get<IBooking[]>("");
};

export const getBookingById = async (id: number): Promise<IBooking> => {
  return await get<IBooking>(`/${id}`);
};
