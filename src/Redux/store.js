import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./Word/wordSlice";
export const store = configureStore({
  reducer: { words: wordSlice },
});
