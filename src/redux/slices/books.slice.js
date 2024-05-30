import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: data,
    filteredBooks: books,
    selectedMonth: "",
  },
  reducers: {
    setBooks: (state, action) => {
      state.books.push(action.payload);
    },
    setFilteredBooks: (state, action) => {},
    setSelectedMonth: (state, action) => {},
  },
});

export const { setBooks, setFilteredBooks, setSelectedMonth } =
  booksSlice.actions;
export default booksSlice.reducer;
