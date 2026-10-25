import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BookState = {
	bookItems: BookingItem[];
};

const initialState: BookState = {
	bookItems: [],
};

export const bookSlice = createSlice({
	name: "BookState",
	initialState: initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingItem>) => {
			const index = state.bookItems.findIndex((item) => {
				return (
					item.venue === action.payload.venue &&
					item.bookDate === action.payload.bookDate
				);
			});
			if (index === -1) {
				state.bookItems.push(action.payload);
			}
			else {
				state.bookItems[index] = action.payload;
			}
		},
		removeBooking: (state, action: PayloadAction<BookingItem>) => {
			const remainBooking = state.bookItems.filter((item) => {
				return (
					item.nameLastname !== action.payload.nameLastname ||
					item.tel !== action.payload.tel ||
					item.venue !== action.payload.venue ||
					item.bookDate !== action.payload.bookDate
				);
			});
			state.bookItems = remainBooking;
		},
	},
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
