"use client"
import { useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { useDispatch } from "react-redux";

export default function BookingList() {
    const dispatch = useDispatch();
    const bookingList = useAppSelector((state) => state.bookSlice.bookItems);

    const handleRemoveBooking = (bookingItem: BookingItem) => {
        dispatch(removeBooking(bookingItem));
    }

    return (
        <div className="w-full flex flex-col items-center space-y-4">
            {bookingList.length === 0 ? (
                <p>No Venue Booking</p>
            ) : null}
                {bookingList.map((booking, index) => (
                    <div className="w-full bg-slate-200 rounded px-5 mx-5 py-2 my-2 " key={index}>
                        <div className="text-xl py-2">Venue: {booking.venue}</div>
                        <div className="text-sm">Date: {booking.bookDate}</div>
                        <div className="font-sm">Name: {booking.nameLastname}</div>
                        <div className="text-sm">Contact: {booking.tel}</div>

                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                            onClick={() => handleRemoveBooking(booking)}
                        >
                            Remove Booking
                        </button>
                    </div>
                ))}
        </div>
    );
}