import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  tick,
  addCorrect,
  addIncorrect,
  keyCounter,
  refleshWords,
} from "../../Redux/Word/wordSlice";
import Result from "../Result/Result";
const Form = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const words = useSelector((state) => state.words.words);
  const timer = useSelector((state) => state.words.timer);
  const keyCount = useSelector((state) => state.words.keyCount);
  const lang = useSelector((state) => state.words.lang);

  useEffect(() => {
    if (start) setTimeout(() => dispatch(tick()), 1000);
    if (timer === 1) setStart(false);
  }, [start, timer, dispatch]);

  const handleChange = (e) => {
    dispatch(keyCounter);
    dispatch(setStatus({ id: words[index].id, status: "next" }));

    let word =
      lang === "english"
        ? words[index].english.toLowerCase()
        : words[index].turkish.toLowerCase();

    if (e.target.value.includes(" ")) {
      setInput("");

      if (word.includes(input) && word.length === input.length) {
        dispatch(setStatus({ id: words[index].id, status: "correct" }));
        dispatch(addCorrect());
      } else if (!word.includes(input) || word.length !== input.length) {
        dispatch(setStatus({ id: words[index].id, status: "incorrect" }));
        dispatch(addIncorrect);
      }

      if (words.length - 1 === index) {
        dispatch(refleshWords());
        setIndex(0);
      } else setIndex(index + 1);
    } else setInput(e.target.value);
    if (keyCount === 0) setStart(true);
  };

  return (
    <div className="form-input">
      <input
        className="input"
        disabled={timer === 0}
        value={input}
        onChange={handleChange}
      />
      <span className="timer">{timer}</span>
      {timer === 0 && <Result />}
    </div>
  );
};

export default Form;
