import React from "react";
import { useSelector } from "react-redux";

const Word = () => {
  const words = useSelector((state) => state.words.words);

  const lang = useSelector((state) => state.words.lang);
  return (
    <div className="words">
      {words.map((word) => (
        <span className={word.status} key={word.id}>
          {lang === "turkish"
            ? word.turkish.toLowerCase()
            : word.english.toLowerCase()}
        </span>
      ))}
    </div>
  );
};

export default Word;
