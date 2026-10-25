"use client";

import DateReserve from "@/components/DateReserve";
import Button from "@mui/material/Button";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {addBooking} from "@/redux/features/bookSlice";
import { useState } from "react";


export default function BookingPage() {
    const dispatch = useDispatch<AppDispatch>();
    const [bookingItem, setBookingItem] = useState<BookingItem>({
        bookDate: "",
        nameLastname: "",
        tel: "",
        venue: "",
    });

    const handleBookingChange = (bookingItem: BookingItem) => {
        setBookingItem(bookingItem);
    }

    const handleBookingSubmit = () => {
        dispatch(addBooking(bookingItem));
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold">Venue Booking</h1>
            

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Date, Contact Information and Venue</div>
                <DateReserve onBookingChange={handleBookingChange} />
            </div>

            <Button
                type="submit"
                name="Book Venue"
                variant="contained"
                onClick={handleBookingSubmit}
            >
                Book Venue
            </Button>


        </main>

    );
}