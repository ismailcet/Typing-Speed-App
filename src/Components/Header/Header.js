import React from "react";
import { useDispatch } from "react-redux";
import { setLang } from "../../Redux/Word/wordSlice";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <h1 className="title">Typing Speed App</h1>
      <select
        name="lang"
        id="lang"
        onChange={(e) => {
          dispatch(setLang(e.target.value));
        }}
      >
        <option value="turkish">Türkçe</option>
        <option value="english">English</option>
      </select>
    </header>
  );
};

export default Header;
