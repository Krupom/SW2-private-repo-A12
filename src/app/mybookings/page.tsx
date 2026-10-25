import BookingList from "@/components/BookingList";

export default function MyBookingsPage() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold">My Bookings</h1>
            <BookingList />
        </main>
    );
}