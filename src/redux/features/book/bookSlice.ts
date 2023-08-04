import { IBook } from "@/types/books";
import { createSlice } from "@reduxjs/toolkit";

interface IList {
  whiteList: IBook[];
  readingList: IBook[];
  finishedList: IBook[];
}

const initialState: IList = {
  whiteList: [],
  readingList: [],
  finishedList: []
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToWhiteList: (state, { payload }) => {
       const isExist = state.whiteList.find(({ _id }) => _id === payload._id);
       if (!isExist) {
         state.whiteList.push(payload);
       } else {
         state.whiteList = state.whiteList.filter(
           ({ _id }) => _id !== payload._id
         );
       }
    },

    addToReadingList: (state, { payload }) => {
      const isExist = state.readingList.find(({ _id }) => _id === payload._id);
      if (!isExist) {
        state.readingList.push(payload);
      } else {
        state.readingList = state.readingList.filter(
          ({ _id }) => _id !== payload._id
        );
      }
    },

    addToFinishedList: (state, { payload }) => {
      const isExist = state.finishedList.find(({ _id }) => _id === payload._id);
      if (!isExist) {
        state.finishedList.push(payload);
      } else {
        state.finishedList = state.finishedList.filter(
          ({ _id }) => _id !== payload._id
        );
      }
    }
  }
});

export const { addToReadingList, addToWhiteList, addToFinishedList } =
  bookSlice.actions;
export default bookSlice.reducer;
