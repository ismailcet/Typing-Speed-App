import { createSlice } from "@reduxjs/toolkit";
import wordsJson from "../../word.json";

const wordCount = 40;
const getWords = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const newWords = shuffled.slice(0, num);
  return newWords.map((word) => ({ ...word, status: "" }));
};

export const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: getWords(wordsJson.words, wordCount),
    keyCount: 0,
    correct: 0,
    incorrect: 0,
    timer: 60,
    lang: "turkish",
  },
  reducers: {
    refleshWords: (state) => {
      state.words = getWords(wordsJson.words, wordCount);
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setStatus: (state, action) => {
      const item = state.words.find((item) => item.id === action.payload.id);
      item.status = action.payload.status;
    },
    tick: (state) => {
      state.timer -= 1;
    },
    keyCounter: (state) => {
      state.keyCount += 1;
    },
    addCorrect: (state) => {
      state.correct += 1;
    },
    addIncorrect: (state) => {
      state.incorrect += 1;
    },
  },
});

export const {
  setLang,
  setStatus,
  tick,
  addCorrect,
  addIncorrect,
  keyCounter,
  refleshWords,
} = wordSlice.actions;
export default wordSlice.reducer;
