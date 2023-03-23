import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      Echo : {text}
    </div>
  );
}
